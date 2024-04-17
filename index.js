/**
 * Name: Nur Ahmed
 * Date: 4/14/2024
 * CSE 154 AD
 * TA: Allan Tran and Max Beard
 * This is the scripting for the To-Do list which implements click and enter functions.
 * It also implements adding a new task items and removal button of specific task item.
 */
"use strict";
(function() {
  /** Sets up the initial event listeners when the document is fully loaded. */
  document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
  });

  /** Attaches necessary event listeners for adding tasks via 'Enter' key and button click. */
  function setupEventListeners() {
    const inputField = document.getElementById('newTask');
    // Adds a task when the Enter key is pressed
    inputField.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        addTask();
        event.preventDefault(); // Prevents the form from being submitted without task inputted
      }
    });

    const addButton = document.querySelector('button');
    addButton.addEventListener('click', addTask); // Adds a task on button click
  }

  /** Creates a new task list item and appends it to the task list. */
  function addTask() {
    const inputField = document.getElementById('newTask');
    const taskText = inputField.value.trim();
    if (taskText) {
      const tasksList = document.getElementById('tasksList');
      const listItem = createTaskListItem(taskText);
      tasksList.appendChild(listItem);
      inputField.value = ''; // Clears the input field after adding the task
    }
  }

  /**
   * Creates a list item for a task with a text node and a remove button.
   * @param {string} text - The text content of the new task item.
   * @return {HTMLElement} The newly created list item with associated content.
   */
  function createTaskListItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;

    const removeButton = createRemoveButton();
    listItem.appendChild(removeButton);

    return listItem;
  }

  /**
   * Creates a remove button for a task list item.
   * @return {HTMLElement} The button when clicked removes the list item.
   */
  function createRemoveButton() {
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.className = 'remove-btn';
    button.addEventListener('click', function() {
      this.parentNode.remove(); // Removes the list item from the list
    });
    return button;
  }
})();