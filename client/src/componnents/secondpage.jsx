import { useState } from "react";
const Sec = () => {
    const arrnumber=[1,2,3,4,5,6];
    const [name,setname]=useState(true);
    const [rules,setrules]=useState("Show Rules");
    const [name2,setname2]=useState(true);  
    const [num,setnum]=useState(0);
    const [scoredice,setscoredice]=useState(1);
    const [score,setscore]=useState(0);
    const [num2,setnum2]=useState(0);

    const handelclick=(b)=>{
        if (b===true){
            setrules("Hidden Rules")
            setname(false)
        }
        else{
            setrules("Show Rules")
            setname(true)
        }
    }
    const onclicknumber=(e,a)=>{
        a.i+=1
        //console.log(a.i);  ====>  a.i=e.value
        setnum(e.value)
    }
    console.log(num)
    const restclick=()=>{
        setscoredice(1)
        setscore(0)
        setnum(0)
        setnum2(0)
    }
    const res=()=>{

        if(num===0){
            setname2(false)
        }
        else{
            const a=(Math.floor(Math.random()*(7-1)+1))
            setscoredice(a)
            
            if(a===num){
                setscore(score+5)
                setnum(0)
                setname2(true)
                
            }
            else{
                setscore(score-2)
                setnum(0)
                setname2(true)
            }           
        }
    }
    return (
        <>
        <div className="thecontainer">
        <div className="section">
            <h1>{score}</h1>
            <p>Totale score</p>
        </div>
        <div>
            {!name2 &&<h3 className="sectionh3">You have not selected any number</h3>}
            <div className="firstbtn">
        {arrnumber.map((value,i)=>(
                    <p className="btnumber" key={i+1}  onClick={()=>onclicknumber({value},{i})}>{value}</p>
        ))}
        </div>
        <div className="select">
            <h1 className="selectp">Select Number </h1>
        </div>
        </div>
        </div>
        <div>
        <div className="home">
            <div className="homeimg" key={scoredice} >
                <img src={`dice_${scoredice}.png`} onClick={res} key={scoredice} alt="" />
            </div>
            <div className="homebtn">
                <div className="btngames">
                    <h1 className="h1btn" >Click on Dice to roll</h1>
                    <button className="btn1" onClick={()=>restclick(score)}>Reset Score</button>
                    <br />
                    <button className="btn2" onClick={()=>handelclick(name)}>{rules}</button>

                </div> {!name &&<div className="errorgame">
                    <h1 className="h1error">How to play dice game</h1>
                    <div className="othermsg">
                        <p>select any number</p>
                        <p>click on dice image</p>
                        <p>after click on  dice  if selected number is 
                            equal to dice number you will get same point 
                            as dice 
                        </p>
                        <p>if you get wrong guess then  2 point will be dedcuted </p>

                    </div>
                </div>}
                
            </div>
        </div>
        </div>
        
        </>
    );
}
 
export default Sec;