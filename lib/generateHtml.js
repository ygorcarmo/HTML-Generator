module.exports = (manager, engineers, interns) => {

    let html = "";

    // manager card 
    html += `<div class="card bg-light m-2" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary">
        <h2 class="card-title">${manager[0].name}</h2>
        <h3 class="card-title role"><i class='bx bx-coffee'></i> Manager</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager[0].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a></li>
          <li class="list-group-item">Office number: <a href="tel:${manager[0].officeNumber} target="_blank">${manager[0].officeNumber}</a></li>
        </ul>
      </div>
    </div>`

    // engineer card

    engineers.forEach((engineer) =>{
      html +=`<div class="card bg-light m-2" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title role"><i class='bx bx-glasses' ></i> Engineer</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
      </div>
    </div>
      `
    });

    // intern card 

    interns.forEach((intern) => {
      html += `<div class="card bg-light m-2" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title role"><i class='bx bxs-graduation' ></i> Intern</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
      `
    });



    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    
        <!-- Page title -->
        <title >My Team</title>
    
        <!-- CSS files -->
        <link rel="stylesheet" href="reset.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="styles.css" />
    
      </head>
    
      <body>
          <header class="">
            <h1 class="text-center text-white bg-danger p-4">
              My Team
            </h1> 
          </header>
    
          <main class="d-flex flex-wrap p-5">
            ${html}
          </main>
      </body>
    </html>`
}