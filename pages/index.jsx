import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'

export default function TodoList() {
    
    const [items, setItems] = useState([])

    function onItemAdded(name) {
        const updateItems = [
            ...items,
            {
                id: items.length + 1,
                name: name
            }
        ];

        setItems(updateItems);
    }

    function onItemDeleted(item) {
        const filteredItems = items.filter(currentItem => currentItem !== item);
        setItems(filteredItems);
    }

    return (
        <Layout>
            <AddItemForm onFormSubmit={onItemAdded} />
            <TodoItemList items={items} onItemDeleted={onItemDeleted} />
        </Layout>
    )
}

function TodoItemList({items, onItemDeleted}) {

    function handleOnItemDeleted(item) {
        onItemDeleted(item)
    }

    return (
        <div className={styles['todo-list']}>
                <ul className={styles['todo-items']}>
                    {items.map(currentItem => (
                        <TodoItem key={currentItem.id} item={currentItem} onDeleteItem={handleOnItemDeleted}></TodoItem>
                    ))} 
                </ul>
            </div>
    )
}

function TodoItem({item, onDeleteItem}) {
    
    function handleOnDeleteItem() {
        onDeleteItem(item);
    }

    return (
        <li key={item.id} className={styles['todo-item']}>
            {item.name}
            <button onClick={handleOnDeleteItem} className={styles['delete-button']} type='button'>delete</button>
        </li> 
    )
}

function AddItemForm({onFormSubmit}) {
    const [name, setName] = useState('');

    function handleSubmit() {
        onFormSubmit(name);
        setName(''); // Clean the form
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    return (
        <div className={styles['todo-header']}>
                <label className={styles['todo-label']}>Add a TODO</label>
                <input value={name} onChange={handleChangeName} className={styles['todo-input']} type='text'></input>
                <button type='button' onClick={handleSubmit} className={styles['add-button']}>ADD</button>
            </div>
    )
}