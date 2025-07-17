export function todoItem(title, description, dueDate, priority, notesInput="...", checklistInput="...", projectInput="default") {
    // initialize fields
    let complete = false;

    let notes = notesInput;
    let checklist = checklistInput;
    let project = projectInput;


    // getters and setters
    const getTitle = () => title;
    const setTitle = (newTitle) => {title = newTitle};

    const getDescription = () => description;
    const setDescription = (newDescription) => {description = newDescription};

    const getDueDate = () => dueDate;
    const setDueDate = (newDueDate) => {dueDate = newDueDate};

    const getPriority = () => priority;
    const setPriority = (newPriority) => {priority = newPriority};

    const getNotes = () => notes;
    const setNotes = (newNotes) => {notes = newNotes};

    const getChecklist = () => checklist;
    const setChecklist = (newChecklist) => {checklist = newCheckList};

    const getProject = () => project;
    const setProject = (newProject) => {project = newProject};

    // other helpful functions
    const viewTodoMin = function() {
        return {title, dueDate};
    }

    const viewTodoFull = function() {
        return {title, description, dueDate, priority, notes, project, complete};
    }

    function viewCompleteStatus() {
        return complete;
    }

    const toggleComplete = function() {
        complete = !complete;
    } 

    return {
        // getters
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getNotes,
        getChecklist,
        getProject,
        
        // setters
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        setNotes,
        setChecklist,
        setProject,

        // helper functions
        viewTodoMin,
        viewTodoFull,
        viewCompleteStatus,
        toggleComplete,
    };
}