
import './index.css';


function Form(props){


        return (
           
                

                <form onSubmit={props.getWeather}   >
                
                <div >
                <input type="text" placeholder='city...'  name='city'  />
                </div>
                <div >
                <input type="text" placeholder='country...' name='country' />
                </div>
                <div >
                <button >Get Weather</button>
                </div>
                

        </form>

            
            
                
           
            
        )
    }




export default Form;