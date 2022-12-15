import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id:0
  }),
  actions:{
    addTodo(item){
      //Save to state
      this.todoList.push({item:item, id:this.id++,completed:false})
      //add to database 
   /*    try{
        const res = await axios.get('localhost:3000/todos');
        this.todos = res.data;
      }catch(error){
        console.log(error);
      }
 */
    },
    deleteTodo(item){
      this.todoList = this.todoList.filter((object)=>{
        return object.id !== item.id
      })
    }
  }
})