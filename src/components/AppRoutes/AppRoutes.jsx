import { Routes, Route } from 'react-router-dom';
import Library from '../Library/Library';
import MyDictionary from '../MyDictionary/MyDictionary';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import FormCreateTopic from '../FormCreateTopic/FormCreateTopic';
import Carousel from '../Carousel/Carousel';
import PageModule from '../PageModule/PageModule';
import Preview from '../Preview/Preview';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pageModule/:moduleId" element={<PageModule />} />
      <Route path="/home" element={<Preview />} />
      <Route path="/library" element={<Library />} />
      <Route path="formCreateTopic/:moduleId?" element={<FormCreateTopic />} />
      <Route path="/myDictionary" element={<MyDictionary />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
