import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./scss/style.scss";
import 'aos/dist/aos.css';
import configureStore from './managers/store/configureStore';
import { Provider } from 'react-redux';
import { getBlogsFromDatabase } from './managers/action/blogAction';
// import { addWish } from './managers/action/wishAction';
// import { BookContext } from './context/BookContext';

const store: any = configureStore();

// const MyProd = () => {
//   const [books] = useContext(BookContext)
//   return (
//     <>
//       {books.map((item: any) =>
//         store.dispatch(
//           addWish({
//             id: item.id,
//             image: item.image,
//             title: item.title,
//             price: item.price,
//           })
//         )
//       )}
//     </>
//   );
// };
// MyProd()
// console.log(store.getState());

const result = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<div className='loading-gif d-flex align-items-center justify-content-center'><img src="https://media.tenor.com/dHAJxtIpUCoAAAAi/loading-animation.gif" alt="loading" width="100px" /></div>, document.getElementById("root"));

store.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});
