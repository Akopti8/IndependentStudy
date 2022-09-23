import App from "next/app"
import Layout from "../components/Layout/Layout";
import 'semantic-ui-css/semantic.min.css'
import Navbar from "../components/Layout/Navbar";
import { Component } from "react";

class MyApp extends App{
    render(){
        const {component} = this.props
    
    

    return(
        <Layout>
            <Component />
        </Layout>
    );
    }
}

export default MyApp;