import {Link} from "react-router-dom"
const Firs = () => {
    return (
    <>
    <div className="header">
        <div className="imag">
            <img src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAR~yOXk6FCBTd76QlIgiyoJckSojTp-d1kvip6RgjTjnmQ0YDUBpRe7WSv90pdjXN6iYVl1yHNp-y3n6p8MYa2Ld-R2Ip9b4-b3103TqxyHKEBHX9P3Mowpbf05eYdSxrz55ONjenlsn9DpwGiOZ487HPXMmYtMHoqMjoFAB7HrKDPRuOFtuVf3E4M17s5GqEDa6EvwZfKBXrF69Q~VgdRGEZK1vcuU5hNudAOzHXhGIGPxrVswlI3HcgaIhYoy~UoAIKCczhcdgljm5D7WPSdKAkdBDEu4IX2lePjjifpmk2JKPdsaU01VdmjVy2ZdOS5LErqb58m~iszDGqaCbA__" alt="" />
        </div>
        <div className="dicegame">
            <h1>DICE GAME</h1>
            <button><Link to="secondpage"><a>Play Now</a></Link></button>
        </div>

    </div>

    </>);
}
 
export default Firs;