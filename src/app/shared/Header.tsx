export default function Header(){
   
    const menulist=[{
        name:"Home",
        path:"/home"
    },{
        name:"Profile",
        path:"/profile"
    },{
        name:"Contact",
        path:"/contact"
    }]
    return(<>
    <div className="bg-blue-900 p-6">
      <ul className="flex gap-[20px] justify-center text-white ">

        {menulist.map((item,index)=>{
            return(<li key={index}><a href={item.path}>{item.name}</a></li>)
        })}
      </ul>
     </div>
     </>)
    }
