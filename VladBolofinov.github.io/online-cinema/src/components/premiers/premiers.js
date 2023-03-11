import {Component} from "react";
import './premiers.scss';
import cinemaService from "../../resourses/cinemaService";
class Premiers extends Component {

    state = {
        moviesList: [],
        filter: false
    }

    cinemaService = new cinemaService();

    componentDidMount() {
        this.cinemaService
            .getAllPremiers2023()
            .then(this.onMoviesLoaded)
    }

    onMoviesLoaded = (moviesList) => {
        this.setState({moviesList})
    }

    onMoviesFilter = (moviesList) => {
        this.setState({filter: !this.state.filter});
    }

    renderItems = (arr) => {
       const items = arr.map(item => {
            return (
                <div className='premiers-item'>
                    <img className='poster' src={item.poster}/>
                    <p className='item item-name'>{item.name}</p>
                    <p className='item item-duration'>{`${item.duration} минут`}</p>
                </div>
            )
        })
        return items;
    }

    render() {
        const {moviesList, filter} = this.state;
        const itemsFilter = this.state.moviesList.filter(item => item.duration > 100);
        const arrList = (filter) ? itemsFilter : this.state.moviesList;
        const items = this.renderItems(arrList);
        return (
            <div className='wrapper'>
                <p>February's premiers</p>
                <button className="btn second"
                        onClick={this.onMoviesFilter}>
                    Filter by duration</button>
                <div className='wrapper-premiers'>
                    {items}
                </div>
            </div>
        )
    }

}

export default Premiers;