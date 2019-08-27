import AOS from "aos"

export default class Header extends React.Component{

    componentDidMount(){
        AOS.init();//we need to initialise it only once and that is why we changed the component
        //from function based to class based
    }

    render(){
        return(
            <header id="header">
                <a href="index.html" className="logo">Massively</a>
            </header>
        )
    }

}

