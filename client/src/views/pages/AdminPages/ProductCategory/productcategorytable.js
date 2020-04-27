import React, { Component } from 'react'
import axios from 'axios'
import { Container, Table,Badge } from 'reactstrap'



const ProductCatergory=props=>(
    <tr>
        <td>{props.productCatergory.categoryName}</td>
        <td>{props.productCatergory.categoryDiscription}</td>
        <td>{props.productCatergory.categoryNote}</td>
        <td>{props.productCatergory.subCategory.map(element=>{
            return <h3>  <Badge color="secondary">{element}</Badge></h3>
        })}
        </td>
        
        <td>
        <button className="btn btn-danger" onClick={()=>{props.deleteProductCategory(props.productCatergory._id)}}>Delete</button>
        </td>
        
    </tr>

)

export default class productcategorytable extends Component {

    constructor(props){
        super(props)
       
        this.loadProductCategoryData=this.loadProductCategoryData.bind(this);
        this.categoryList=this.categoryList.bind(this);
        this.deleteProductCategory=this.deleteProductCategory.bind(this);
        this.state={
            productcategorylist:[]
        };
    
    }

    componentDidMount(){
        this.loadProductCategoryData()

    }

    loadProductCategoryData(){
        axios.get('http://localhost:3001/productCategory/')
        .then(ressopns=>{
            console.log(ressopns);
            this.setState({productcategorylist:ressopns.data})
            console.log(ressopns.data);
            
        })
        .catch((error)=>{
            console.log('error :'+error);
        })
    }

    deleteProductCategory(id){
        axios.delete('http://localhost:3001/productCategory/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            storemanagerlist:this.state.productcategorylist.filter(el=>el._id!==id)
        })
        
    }


    categoryList(){
        return this.state.productcategorylist.map(currentproductcategory=>{
            return <  ProductCatergory productCatergory={currentproductcategory} deleteProductCategory={this.deleteProductCategory}  key={currentproductcategory._id}/>;
        })
   }

    render() {
        return (
            <Container style={Styles.regTablePlanal}>
            <h4 style={Styles.regHeadertext}>Product Catergory</h4>
                <Table  responsive >
                    <thead>
                          <tr>
                            <th>Name</th>
                            <th>Discription</th>
                            <th>Note</th>
                            <th>SubCategory</th>
                            <th>Action</th>         
                         </tr>
                    </thead>
                        <tbody>
                           {this.categoryList()}
                        </tbody>
                </Table>
            </Container>         
       
        )
    }
}


const Styles={
    regHeadertext:{
        padding: '10px',
    },
    regTablePlanal:{
        backgroundColor:"white",
        padding: '10px',
        borderRadius:'10px'
    },
    regHeadertext:{
        padding: '10px',
    }
}