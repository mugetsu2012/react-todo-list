import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'

export default function TodoList() {
    return (
        <Layout>
            <div className={styles['todo-header']}>
                <label className={styles['todo-label']}>Add a TODO</label>
                <input className={styles['todo-input']} type='text'></input>
                <button className={styles['add-button']}>ADD</button>
            </div>
            <div className={styles['todo-list']}>
                <ul className={styles['todo-items']}>
                    <li className={styles['todo-item']}>Item 1 <button className={styles['delete-button']} type='button'>delete</button></li> 
                    <li className={styles['todo-item']}>Item 2 <button className={styles['delete-button']} type='button'>delete</button></li> 
                    <li className={styles['todo-item']}>Item 3 <button className={styles['delete-button']} type='button'>delete</button></li> 
                </ul>
            </div>
        </Layout>
    )
}