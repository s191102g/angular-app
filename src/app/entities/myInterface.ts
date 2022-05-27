export interface IUser{
      id:number,
      full_name:string,
      user_name:string,
      pass_word:string,
      user_area:string,
      user_role:number
}


export interface IProject{
    id:number,
    prj_name:string,
    prj_date:string,
    prj_teamsize:number,
    prj_expense:number,
    prj_spending:number
}

export interface ITask{
    id:number,
    task_name:string,
    task_des:string,
    id_prj:number,
    id_user:number
}