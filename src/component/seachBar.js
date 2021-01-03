import React from 'react'

class SeachBar extends React.Component {
    state = { term: '' }

   
    onFormSUBMIT=(e)=> {
        e.preventDefault();
        this.props.metodo1(this.state.term);
    }
    render() {        
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSUBMIT} className="ui form">
                    <label className="field">Imagen a Buscar</label>
                    <input
                        type="text"
                        onChange={(e) => this.setState({ term: e.target.value })}
                        value={this.state.term}
                    />
                </form>
            </div>
        )
    }
}

export default SeachBar;