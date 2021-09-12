import React from "react";
import ExampleService from "../services/example.service";

class ConsumoApi extends React.Component {
  //Inicializamos estado del componente
  state = {
    loading: true,
    error: null,
    data: {
      info: {},
      results: [],
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await ExampleService.fetchCharacters();
      console.log(response);

      this.setState({
        loading: false,
        data: response.data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div>
        {this.state.data.results.length === 0 && (
          <div>No encontramos datos</div>
        )}
        {this.state.data.results.length !== 0 && (
          <div className="">{this.state.data.info.count}</div>
        )}
        {this.state.loading && <div>Cargando...</div>}
      </div>
    );
  }
}

export default ConsumoApi;
