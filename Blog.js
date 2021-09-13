import {Link, useRouteMatch, Route} from 'react-router-dom';
import Post from './Post';

const blogPosts = [
    {
        title: 'Some Blog Title',
        content: 'Gummi bears sweet pie sugar plum cotton candy caramels. Topping pastry brownie apple pie pastry tart chocolate bar carrot cake. Bonbon cotton candy wafer tiramisu gummies croissant. Apple pie gummies sweet marshmallow sesame snaps. Jelly chocolate cake lollipop sweet roll sweet gingerbread oat cake cake. '
    },
    {
        title: 'I Am Also A Blog',
        content: 'Tiramisu danish carrot cake wafer chocolate sweet chupa chups lemon drops soufflé. Carrot cake lollipop marzipan pastry sugar plum. Gummi bears chocolate cake tart apple pie jujubes tootsie roll candy canes pie. Lemon drops chocolate cake donut bonbon dragée bonbon. Powder icing apple pie chocolate bar tart shortbread marzipan.'
    },
    {
        title: 'Bloggy McBlog Face',
        content: 'Donut pastry bonbon macaroon danish sweet roll toffee liquorice. Icing macaroon dessert shortbread candy sweet roll. Croissant caramels sweet bonbon marshmallow biscuit cotton candy pie tart. '
    }
];

const Blog = (props) => {
    const {path, url} = useRouteMatch();

    return(
        <>
            <h1>This is our blog</h1>
            <nav>
            {
                blogPosts.map( (post, index) => (  // vanilla js
                    <>
                        <Link to={`${url}/${index}`}> 
                            {post.title}
                        </Link>
                        <br/>
                    </>
                ))
            }
            </nav>
            <Route exact path={path}>
                <h2>Please choose a Link below</h2>
            </Route>
            <Route path={`${url}/:id`}>
                <Post path={blogPosts}/>
            </Route>
        </>
    );
}
export default Blog;