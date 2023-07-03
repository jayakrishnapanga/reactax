
 export const title=(<a href='/'>
<img className="logo" alt="logo" src="https://bsmedia.business-standard.com/_media/bs/img/article/2016-02/27/full/1456595699-0403.jpg"></img>
</a>)

const HeaderComponent=()=>{
    
    return (
        
        <div className="header">
            {title},
            <div className="nav-items">
              <ul>
                <li>home</li>
                <li>login</li>
                <li>signup</li>
              </ul>
            </div>
        </div>
        )
  
}
export default HeaderComponent;