Vue.component('task-list',{
  template:`
  <div>
    <task v-for="task in tasks">{{task.task}}</task>
    </div>
  `,
  data()
  {
    return{
    tasks:[
      {task:'One',completed:true},
      {task:'Two',completed:true},
      {task:'Three',completed:true},
    ]
  };
  }
});

Vue.component('task',{
    template: '<li><slot></slot></li>',
});

new Vue({
  el:"#root",
});







///////////////////////////////////////////////////////
/*
Vue.component('task',{
  template:'<li><slot></slot></li>',
});
new Vue({
  el:"#root",
});
*/
