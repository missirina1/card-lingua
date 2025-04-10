import { makeAutoObservable } from 'mobx';

class WordsStore {
  words = [];
  loading = false;
  error = null;

  newWord = '';
  wordTranslate = '';

  constructor() {
    makeAutoObservable(this);
  }

  setNewWord(word) {
    this.newWord = word;
  }

  setWordTranslate(translate) {
    this.wordTranslate = translate;
  }

  fetchWords() {
    this.loading = true;
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then((res) => res.json())
      .then((data) => {
        this.words = data;
      })
      .catch((err) => {
        this.error = err.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  addWord() {
    const newWordObject = {
      id: Date.now(),
      english: this.newWord.trim(),
      russian: this.wordTranslate.trim(),
      transcription: '',
    };

    fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWordObject),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status} `);
        }
        return res.json();
      })
      .then((addedWord) => {
        this.words = [...this.words, addedWord];
        this.setNewWord('');
        this.setWordTranslate('');
      })
      .catch((error) => {
        console.log('Ошибка при добавлении слова: ', error);
      });
  }

  deleteWord(id) {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка удаления слова');
        }
        this.words = this.words.filter((word) => word.id !== id);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }

  updateWord = (id, newEnglish, newRussian) => {
    this.words = this.words.map((word) =>
      word.id === id
        ? { ...word, english: newEnglish, russian: newRussian }
        : word
    );
  };

  updateWordOnServer = (id, updateWord) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateWord),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка:${res.status}`);
        }
        return res.json();
      })
      .then((updatedWordFromServer) => {
        this.words = this.words.map((word) =>
          word.id === id ? { ...word, ...updatedWordFromServer } : word
        );
      })
      .catch((error) => console.error('Ошибка при обновлении слова:', error));
  };
}

export const wordsStore = new WordsStore();
