import image from './assets/react.svg'
function Card(props){
    return(
<>
<div className='card'>
    <img className='card-img' src={image} alt="react logo" />
    <h1 className='card-title'>Sharan</h1>
    <p className='card-content'>welcome to My webpage</p>
</div>

</>
    );
}


export default Card;