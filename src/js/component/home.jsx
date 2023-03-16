import React, {useState} from "react";

//create your first component
const Home = () => {
	
	const [toDos, setToDos] = useState("");
	const [newTodoL, setNewTodoL] = useState([]);

	function handleToDosChange(e) {
		e.preventDefault()
		setToDos(e.target.value)
	}

	function handleToDos(e) {
		e.preventDefault()
		if (toDos === "") return
		setNewTodoL([...newTodoL, {id: Date.now(), text: toDos, number: (newTodoL.length + 1) }])
		e.target.reset()
	}

	function removeNewTodoL(id) {
		setNewTodoL(newTodoL.filter((todo) => todo.id !== id))
	}

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-4">
					<h1 className="title">To-Do List</h1>
					<div className="col">
						<form onSubmit={handleToDos}>
							<input type="text" className="form-control mb-2" placeholder={newTodoL.length == 0 ? "There aren't any tasks, please add one" : "What needs to be done"} onChange={handleToDosChange}></input>
							<ul className="list-group">
								{newTodoL.map((todo) => (
									<li className="list-group-item" key={todo.id}> {todo.text}
										<button type="button" className="close float-end" aria-label="close" onClick={() => removeNewTodoL(todo.id)}><span aria-hidden="true">&times;</span>
										</button>
									</li>
								))}
							</ul>
							<div className="col mb-5">
								<small className="text-white">{newTodoL.length} items left</small>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
