import React from 'react'
import PageHeader from '../template/pagerHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name="Tarefar" small="Cadastro"/>
        <TodoForm />
        <TodoList /> 
    </div>
)
