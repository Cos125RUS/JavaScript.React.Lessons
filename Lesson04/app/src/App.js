import './App.css';
import DivWithChild from "./components/DivWithChild";
import BorderComp from "./components/BorderComp";
import Card from "./components/Card";
import MouseTracker from "./components/MouseTracker";
import MouseInfo from "./components/MouseInfo";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ArticleDetail from "./components/ArticleDetail";
import ArticleList from "./components/ArticleList";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";


const articles = [
    {id: 1, title: 'Article 1', content: 'Content of Article 1'},
    {id: 2, title: 'Article 2', content: 'Content of Article 2'},
    {id: 3, title: 'Article 3', content: 'Content of Article 3'},
];

const products = [
    {id: 1, name: 'Product 1', description: 'description of Product 1', price: 100},
    {id: 2, name: 'Product 2', description: 'description of Product 2', price: 200},
    {id: 3, name: 'Product 3', description: 'description of Product 3', price: 300},
    {id: 4, name: 'Product 4', description: 'description of Product 4', price: 5000},
    {id: 5, name: 'Product 5', description: 'description of Product 5', price: 500},
    {id: 6, name: 'Product 6', description: 'description of Product 6', price: 600},
    {id: 7, name: 'Product 7', description: 'description of Product 7', price: 800},
    {id: 8, name: 'Product 8', description: 'description of Product 8', price: 900},
    {id: 9, name: 'Product 9', description: 'description of Product 9', price: 900},
];

function App() {
    return (
        <Router>
            <div className="App">
                {/*{*/}
                {/*  console.log(*/}
                {/*      <DivWithChild>*/}
                {/*        <p>New Text</p>*/}
                {/*        <div>New element div</div>*/}
                {/*      </DivWithChild>*/}
                {/*  )*/}
                {/*}*/}

                {/*<div>*/}
                {/*  <h2>Children example 2</h2>*/}
                {/*    <BorderComp>*/}
                {/*        <p>Text inside border</p>*/}
                {/*        <button>Button inside border</button>*/}
                {/*    </BorderComp>*/}
                {/*    <BorderComp>*/}
                {/*        <h3>New title</h3>*/}
                {/*    </BorderComp>*/}
                {/*    <p>Text outside border</p>*/}
                {/*</div>*/}

                {/*  <div>*/}
                {/*    <h2>Example 3 props.children</h2>*/}
                {/*      <Card title="Card 1">*/}
                {/*          <p>Card 1 content</p>*/}
                {/*          <button>Action</button>*/}
                {/*      </Card>*/}
                {/*      <Card title="Card 2">*/}
                {/*          <p>Card 2 content</p>*/}
                {/*          <a href="#">link</a>*/}
                {/*      </Card>*/}
                {/*  </div>*/}

                {/*  <MouseTracker render={MouseInfo}/>*/}

                {/*<Routes>*/}
                {/*    <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />*/}
                {/*    <Route path="*" element={<ArticleList articles={articles} />} />*/}
                {/*</Routes>*/}

                <Routes>
                    <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
                    <Route path="/product/:productId" element={<ProductDetail products={products} />} />
                    <Route path="/" element={<ProductList products={products} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
