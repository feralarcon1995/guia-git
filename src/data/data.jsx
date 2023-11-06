export const commands = {

    configuration: [
        {
            id: 'configuration-git',
            title: 'Configuración de git',
            description: 'Haremos la configuración de nuestro controlador de versiones en nuestra pc.'
        },
        {
            id: 'git-config-user-name',
            title: "Configurar el nombre de usuario global",
            command: ` git config --global user.name "mi nombre" `,
            description: `Configuramos el nombre de usuario global de Git. Este nombre se utiliza para identificar al autor de los commits en todos los repositorios de Git.
            En este caso, el comando establece el nombre de usuario en 'mi nombre'. Esto significa que todos los commits que hagas en cualquier repositorio de Git se atribuirán a 'mi nombre'.`,
            secondCommand: ` git config --get user.name 
            ` ,
            secondDescription: 'Para ver el nombre de usuario global de Git, puedes usar el siguiente comando:',
            output:
                `bash ➔ ~/Desktop/guia-git 
Fernando Alarcon `,
            outputDescription: 'Este comando devolverá el valor del nombre de usuario global de Git, que en este caso es "Fernando Alarcon".'

        },
        {
            id: 'git-config-user-email',
            title: "Configurar el email de usuario global",
            command: 'git config --global user.email miemail@ejemplo.com',
            description: `
            El comando git config --global user.email miemail@ejemplo.com configura la dirección de correo electrónico global de Git. Esta dirección de correo electrónico se utiliza para identificar al autor de los commits en todos los repositorios
            
            En este caso, el comando establece la dirección de correo electrónico. Esto significa que todos los commits que hagas en cualquier repositorio de Git se atribuirán a miemail@ejemplo.com`,
            secondCommand: 'git config --get user.email ',
            secondDescription: 'Para ver el email de usuario global de Git, puedes usar el siguiente comando:',
            output:
                `bash ➔ ~/Desktop/guia-git 
feralarcon1995@gmail.com`,
            outputDescription: 'Este comando devolverá el valor del email de usuario global de Git, que en este caso es "feralarcon1995@gmail.com".'

        },
    
    ],
    start: [
        {
            id: 'start-with-git',
            title: 'Comenzando con un proyecto',
            description: 'Ya una vez configurado, creamos un proyecto básico y vemos cuales son los comandos básicos para trabajar con él.',
        },
        {
            id: 'git-init',
            title: 'Iniciamos git en nuestro proyecto',
            command: 'git init',
            description:`Con git init creamos un nuevo repositorio de Git. Este comando crea un directorio oculto llamado .git en el directorio actual. Este directorio contiene todos los datos de control de versiones del repositorio, como los archivos, los commits y el historial de cambios.`,
            outputDescription:'Una vez inicializado podemos visualizar en la terminal lo siguiente:',
            output:'Initialized empty Git repository in C:/Users/Desktop/guia-git/.git/'
        },
        {
            id: 'git-status',
            title: 'Verificando el estado de nuestro proyecto',
            command: 'git status',
            description:`Con git status muestra el estado del directorio de trabajo y del staging area. Este comando te permite ver los cambios que se han realizado en los archivos, los archivos que no están siendo rastreados por Git y los archivos que han sido agregados al staging area pero aún no se han confirmado.`,
            outputDescription:'Cuando verificamos el status del proyecto, podemos notar dos salidas diferentes. Si no hay nada modificado, mostrará que no hay nada para commitear. Caso contrario, mostrará que archivos están a la espera de ser commiteados.',
            output:
            `
Si no hay cambios en el repositorio:
On branch master
No commits yet
nothing to commit (create/copy files and use "git add" to track)

-------------------
Si hay cambios en el repositorio:
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
nothing added to commit but untracked files present (use "git add" to track)

`

        }
    ],
    branch: [
        {
            id: 'work-with-branchs',
            title: 'Trabajando con ramas',
            description: 'Una vez que se conozcan los comandos básicos, podremos trabajar con las ramas. Veremos qué son, cómo se usan y sus ventajas.'
        },
        {
            id: 'git-branch',
            title: 'Identificar las ramas de nuestro proyecto',
            command: 'git branch'
        }
    ]
};


export function getAllCommands() {
    return commands;
}

export function getCommandById(category, id) {
    const categoryCommands = commands[category];
    return categoryCommands.find(command => command.id === id);
}