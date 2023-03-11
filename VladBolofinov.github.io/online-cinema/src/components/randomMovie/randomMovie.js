import {Component} from "react";

class RandomMovie extends Component {

    render() {
        return(
            <div className='random-movie'>
                <p className='movie-name'></p>
                <img className='movie-img'/>
                    <p className='movie-descr'></p>
            </div>
        )
    }
}

export default RandomMovie;
