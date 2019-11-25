import React, { useState } from 'react';
import './App.css';
import SimpleInput from './components/SimpleInput';
import JSONPretty from 'react-json-pretty';

function App() {
    const [filter, setfilter] = useState({});
    const filterChange = updatedItem => {
        setfilter(updatedItem);
    };

    const setValue = () => {
        setfilter({ name: 'John', email: 'john@doe.com', salary: '50000' });
    };
    const resetValue = () => {
        setfilter({});
    };

    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                crossOrigin="anonymous"
            />
            <header className="App-header">
                <div className="container">
                    <h1 className="pt-5">react-bootstrap-input</h1>
                    <p>try to change form data using input fields or buttons</p>
                    <div className="my-5">
                        <div className="row">
                            <div className="col">
                                <SimpleInput
                                    formObj={filter}
                                    name="name"
                                    placeholder="Your name"
                                    onChange={filterChange}
                                    required
                                    validated
                                />
                            </div>
                            <div className="col">
                                <SimpleInput
                                    formObj={filter}
                                    name="email"
                                    placeholder="Your email"
                                    onChange={filterChange}
                                    required
                                    validated
                                    pattern={
                                        '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
                                    }
                                    errorMessage="Please provide a valid email address"
                                />
                            </div>
                            <div className="col">
                                <SimpleInput
                                    formObj={filter}
                                    type="money"
                                    name="salary"
                                    placeholder="Desired salary"
                                    onChange={filterChange}
                                />
                            </div>
                        </div>
                    </div>
                    <p>form content is:</p>
                    <div className="box">
                        <JSONPretty id="json-pretty" data={filter}></JSONPretty>
                    </div>
                    <div className="my-5">
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                type="button"
                                onClick={setValue}
                                class="btn btn-primary "
                            >
                                Set value
                            </button>
                            <button
                                type="button"
                                onClick={resetValue}
                                class="btn btn-secondary "
                            >
                                Reset to empty
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
