<h1>MyNotes</h1>
"Welcome to MyNotes, a web application that allows you to easily manage your notes.

You can find MyNotes at this link: https://react-mynotes.netlify.app/"

<h2>Starting Page</h2>

After launching the application, we will be redirected to the homepage, where the MyNotes logo is displayed along with two buttons - one for adding a new note and the other for deleting all notes.

<img width="1238" alt="image" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/1ae6a393-79b0-4886-b518-73bf3f57cc53">



<h2>Adding a new note</h2>

To add a new note, click on the 'Add note' button

![image](https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/74069c1b-565b-4dd0-9851-6f7656ddd34c)


Next, in the form, select the category of the note (you have three options: Work, Home, and Others) and enter its content. Depending on the category of the added note, it will have a different color.

<img width="1258" alt="Zrzut ekranu 2023-07-29 o 21 33 19" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/4137f3f5-de4b-422d-bea3-a6231d803d3a">

If you have successfully added a note, it should appear on the main page.

<img width="1257" alt="Zrzut ekranu 2023-07-29 o 21 33 43" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/0ae54827-dc06-4b19-8bcd-74a8cede4f0f">

In case you forget to select a category or enter the content of the note, the form will remind you to do so by requesting that you fill in all the form fields.

<img width="1235" alt="image" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/b2715618-5d65-45de-8957-d9a256eccfb2">


<h2>Editing notes</h2>

To change the content of a note, click on the pencil icon located in the top right corner of the note. A form will appear, allowing you to edit the content of the selected note.

<img width="1254" alt="image" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/e120035b-9a94-418a-b3da-2b6a2619ede1">


<img width="1260" alt="image" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/ef021b50-24ec-4c12-a2e3-5e6a658fe42d">

<h2>Deleting notes</h2>

In MyNotes, you can delete notes in two ways. To delete a single note, simply click on the cross icon located in the top right corner of the note. Upon clicking the cross, the note will be removed from the application.

<img width="1251" alt="image" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/34953768-1310-406a-ba42-1dcccfef2583">


The second way to delete notes is by using the 'Delete Notes' button located in the top right corner of the page. However, please remember that this button is responsible for deleting all notes.

<img width="1241" alt="image" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/3830a519-e50f-48c0-99fa-11bb65c46e81">


Therefore, before the notes are deleted from the page, the application will ask for confirmation of your decision. Upon clicking the 'Delete' button, the notes will be removed from the page. However, if you wish to keep them, simply click 'Cancel'.
<img width="1262" alt="image" src="https://github.com/barteek-poz/MyNotes-React-Typescript/assets/109816351/68230719-0d56-43f4-8c28-2a49ac8d4105">

<h2>Saving notes in localStorage</h2>

MyNotes saves your notes in the browser's memory, so they will be available to you even after refreshing the page or experiencing temporary loss of network connection.
