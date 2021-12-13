// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from "./providers/authProvider";
import { UserList } from "./resources/users";
import { PostList, PostEdit, PostCreate } from './resources/posts'
import i18nProvider from "./providers/i18nProvider";




const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
        <Resource name="users" list={UserList} authProvider={authProvider} i18nProvider={i18nProvider} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
);
export default App;
