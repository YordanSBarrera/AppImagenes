import React from 'react'
import Axios from '../axis/unsplash'
import SeachBar from './seachBar'
import ImagenList from './imagenList'


class App extends React.Component {
    state = { images: [] }

    onSubmit = async (term) => {
        console.log(term);
        const response = await Axios.get('/search/photos', {
            params: {
                query: term
            }
        });
        console.log(response.data.results);
        this.setState({ images: response.data.results })
        console.log(this.state.images)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '40px' }}>
                <SeachBar metodo1={this.onSubmit} />
                <ImagenList lista={this.state.images} />
            </div>
        )
    }
}

export default App;