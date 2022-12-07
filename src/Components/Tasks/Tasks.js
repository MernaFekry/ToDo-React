import React from 'react';
import './Tasks.css';
import { useState ,useEffect} from 'react';
import Task from './../Task/Task';


export default function Tasks() {
    
    const [allTasks, setAllTasks] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
      localStorage.setItem('allTasks',JSON.stringify(allTasks));
    }, [allTasks])
    

    function addNewTask(e){
        const NewTask = {
            taskName: name,
            taskDescription: description
        }
        if(name != "" && description !=""){

            setAllTasks(tmpTasks => [...allTasks,NewTask]);
            setName("");
            setDescription("");
            console.log(allTasks);
            // console.log(allTasks[0]);
        }
        
    }

    function updateTask(taskID){
        console.log(taskID);
    }

    function deleteTask(taskID){
        console.log(taskID);

        let filteredTasks = [...allTasks];
        filteredTasks = filteredTasks.filter( (task,index)=> task[index] != taskID );

        setAllTasks(filteredTasks);
        console.log(allTasks);
    }

  return <>
  
    <div className='task '>
        
        <div className='container p-4 w-75 shadow-lg my-5 rounded-start rounded-end'>

            <div className='row mb-5'>


                <div className='col-4'>
                    <div className='task-Item'>
                        <input value={name} onChange={(e) => {return setName(e.target.value)}} id='taskName'type="text" className='form-control' placeholder='Enter Task Name' />
                    </div>
                </div>

                <div className='col-7'>
                    <div className='task-Item'>
                        <input value={description} onChange={(e) => {return setDescription(e.target.value)}} id='taskDescription' className='form-control' placeholder='Enter Task Description' />
                    </div>
                </div>

                <div className='col-1'>
                    <div className='task-Item'>
                        <button onClick={addNewTask} className="btn btn-info"><i className="fa-solid fa-plus"></i></button>
                    </div>
                </div >


            </div>

            {
                allTasks.map((task,indx) => 
                    <div key={allTasks.id = indx} className='row shadow-lg align-items-center rounded-start rounded-end p-3'>
                        <div className='col-4'>
                            <div className='displayedTaskItem'>
                                <h4>{task.taskName}</h4>
                            </div>
                        </div>

                        <div className='col-5'>
                            <div className='displayedTaskItem'>
                                <h6>{task.taskDescription}</h6>
                            </div>
                        </div>

                        <div className='col-1'>
                            <div className='displayedTaskItem'>
                                <input className='checkBox' type="checkbox" id='checkbox' />
                            </div>
                        </div>

                        <div className='col-1'>
                            <div className='displayedTaskItem'>
                                <button onClick={() => {return updateTask(indx)}} className='btn btn-warning'><i className="fa-solid fa-pen-to-square"></i></button>
                            </div>
                        </div>

                        <div className='col-1'>
                            <div className='displayedTaskItem'>
                                <button onClick={() => { return deleteTask(indx) }} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>

                        
                    </div>
                )
            }

            

            

        </div>
        
    </div>
  
  </>
}
