import Input from "./Input";

function App() {
  return (
    <div className="App">
      <h1>Inputs</h1>
      <div className='container'>
        <div>
          <p className="label">{'<Input />'}</p>
          <Input />
        </div>
        <div>
          <p className='small'>{'&:hover'}</p>
          <Input />
        </div>
        <div>
          <p className='small'>{'&:focus'}</p>
          <Input autoFocus />
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Input error />'}</p>
          <Input error/>
        </div>
        <div>
          <p className='small'>{'&:hover'}</p>
          <Input error />
        </div>
        <div>
          <p className='small'>{'&:focus'}</p>
          <Input autoFocus error />
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Input disabled />'}</p>
          <Input disabled/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Input helperText="Some interesting text" />'}</p>
          <Input helperText="Some interesting text"/>
        </div>
        <div>
          <p className="label">{'<Input helperText="Some interesting text" error />'}</p>
          <Input helperText="Some interesting text" error/>
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Input startIcon />'}</p>
          <Input startIcon="mobile" />
        </div>
        <div>
          <p className="label">{'<Input endIcon />'}</p>
          <Input endIcon="password" />
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Input size="sm" />'}</p>
          <Input size="sm" />
        </div>
        <div>
          <p className="label">{'<Input size="md" />'}</p>
          <Input size="md" />
        </div>
      </div>
      <div className='container'>
        <div>
          <p className="label">{'<Input fullWidth />'}</p>
          <Input fullWidth />
        </div>
      </div>
      <div className='container'>
      <div>
          <p className="label">{'<Input multiline rows="4" />'}</p>
          <Input multiline rows="4" />
        </div>
      </div>
      <footer><p>created by <b>Michelle031</b> - devChallenges.io </p></footer>
    </div>
  );
}

export default App;
