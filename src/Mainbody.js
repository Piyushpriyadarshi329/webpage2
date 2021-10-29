import React from 'react';
import './MainBody.css';
import first from './assest/first.jpg';
import second from './assest/second.jpg';



function Mainbody() {






    var Data = [
        {
            "title": "Saudi King Salman Hospitalized for Medical Tests",
            "link": "https://time.com/5868873/saudi-kind-salman-hospitalized/"
        },
        {
            "title": "Iran Executes Man Convicted of Spying on Soleimani",
            "link": "https://time.com/5868856/iran-executed-spy-soleimani/"
        },
        {
            "title": "Kim Jong Un Berates Officials Over Hospital Project",
            "link": "https://time.com/5868844/kim-jong-un-berate-hospital-officials/"
        },
        {
            "title": "Boy, 12, Driving Stolen Truck Leads Police on Chase",
            "link": "https://time.com/5868839/delaware-boy-stolen-truck-police/"
        },
        {
            "title": "N.J. Federal Judge’s Son Killed, Husband Wounded",
            "link": "https://time.com/5868834/new-jersey-federal-judge-shooting/"
        }
    ]






    return (
        <div>


<div className="mainbody">



<div className="div-1">

<div className="div-3">



<p style={{textAlign:'center',color:'black',fontWeight:'bold'}}> ________________________________________________________</p>
<p  style={{textAlign:'center',color:'red',fontWeight:'bold'}}> LATEST NEWS</p>
<p  style={{textAlign:'center',color:'black',fontWeight:'bold'}}> ________________________________________________________</p>

</div>


<div className="div-2">


{Data.map((item,index)=>{
return(


    <div className="column">
        <div style={{marginLeft:0}}>
            <a href={item.link}>{index+1}</a>
        </div>
        <div>
            <p style={{textAlign:'center'}}>
{item.title}
                {/* <script>
                    document.write(arr[0].title);
                </script> */}
            </p>
        </div>
    </div>


)


})}



</div>
</div>

<div className="image">

    <div classNameName="image1">
        <p style={{textAlign:'center',fontWeight:'bold',fontSize:24,marginTop:100}}>Inside the Issue</p>

        <img src={first} alt="Italian Trulli" width="800" height="140"/>
       
   
    </div>


    <div className="image2">

        <img src={second} alt="Italian Trulli" width="200" height="190"/>
    </div>

</div>
</div>

</div>
    )
}

export default Mainbody
