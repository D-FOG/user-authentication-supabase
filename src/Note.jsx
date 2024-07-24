import './AppN.css'

function App() {

    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".btn");
    let notes = document.querySelectorAll(".input-box");



    function showNotes() {
        notesContainer.innerHTML = localStorage.getItem("notes");
    }
    // showNotes(); 

    const updateStorage = () => {
        localStorage.setItem("notes", notesContainer.innerHTML);
    }

    const createNote = () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "images/delete-removebg-preview.png";
        notesContainer.appendChild(inputBox).appendChild(img);
    }

    notesContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updateStorage();
        }
        else if (e.target.tagName === "P") {
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onkeyup = function () {
                    updateStorage();
                }

            })
        }
    })

    notesContainer.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    })

    return (
        <>
            <div className="container">
                <h1><img src="images/note.png" /> Notes</h1>
                <button className="btn" onClick={createNote}>
                    <img src="images/the_writing_png-removebg-preview.png" /> Create note

                </button>
                <div className="notes-container">
                    {/* <!-- <p contenteditable="true" class="input-box">
            <img src="images/delete-removebg-preview.png">
          </p> --> */}
                </div>
            </div>
        </>
    )
}

export default App
