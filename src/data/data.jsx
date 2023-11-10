export const commands = {

    configuration: [
        {
            "id": 'configuration-git',
            "title": 'Configuración de git',
            "description": 'Haremos la configuración del controlador de versiones en nuestra pc.'
        },
        {
            "id": 'git-config-user-name',
            "title": "Configurar el nombre de usuario global",
            "command": ` git config --global user.name "mi nombre" `,
            "description": `Configuramos el nombre de usuario global de Git. Este nombre se utiliza para identificar al autor de los commits en todos los repositorios de Git.
            En este caso, el comando establece el nombre de usuario en 'mi nombre'. Esto significa que todos los commits que hagas en cualquier repositorio de Git se atribuirán a 'mi nombre'.`,
            "secondCommand": ` git config --get user.name 
            ` ,
            "secondDescription": 'Para ver el nombre de usuario global de Git, puedes usar el siguiente comando:',
            "output":
                `bash ➔ ~/Desktop/guia-git 
Fernando Alarcon `,
            "outputDescription": 'Este comando devolverá el valor del nombre de usuario global de Git, que en este caso es "Fernando Alarcon".'

        },
        {
            "id": 'git-config-user-email',
            "title": "Configurar el email de usuario global",
            "command": 'git config --global user.email miemail@ejemplo.com',
            "description": `
            El comando git config --global user.email miemail@ejemplo.com configura la dirección de correo electrónico global de Git. Esta dirección de correo electrónico se utiliza para identificar al autor de los commits en todos los repositorios
            
            En este caso, el comando establece la dirección de correo electrónico. Esto significa que todos los commits que hagas en cualquier repositorio de Git se atribuirán a miemail@ejemplo.com`,
            "secondCommand": 'git config --get user.email ',
            "secondDescription": 'Para ver el email de usuario global de Git, puedes usar el siguiente comando:',
            "output":
                `bash ➔ ~/Desktop/guia-git 
feralarcon1995@gmail.com`,
            "outputDescription": 'Este comando devolverá el valor del email de usuario global de Git, que en este caso es "feralarcon1995@gmail.com".'

        },
        {
            "id": 'git-config-color',
            "title": 'Configurar la configuración de color',
            "command": 'git config --global color.ui true',
            "description": 'Habilita el uso de colores en la interfaz de línea de comandos de Git, mejorando la legibilidad de la salida.',
            "secondDescription": 'Los colores son útiles para identificar rápidamente cambios, ramas y otros aspectos en la salida de los comandos de Git.'
        },
        {
            "id": 'git-config-merge-tool',
            "title": 'Configurar la herramienta de diferencias por defecto',
            "command": 'git config --global merge.tool vscode',
            "description": 'Establece la herramienta de diferencias que Git usará por defecto al resolver conflictos de fusión. En este caso, se configura para usar Visual Studio Code.',
            "secondDescription": 'Cambiar "vscode" por el nombre del comando de la herramienta de diferencias que prefieras (por ejemplo, "code" para Visual Studio Code o "vimdiff" para VIM).'
        },
        {
            "id": "git-config-editor",
            "title": "Configurar el editor de texto por defecto",
            "command": "git config --global core.editor \"code --wait\"",
            "description": "Establece Visual Studio Code como el editor de texto por defecto para Git. La opción `--wait` permite que Git espere a que se cierre el editor antes de continuar.",
            "secondDescription": "Puedes cambiar \"code\" por el nombre del ejecutable de tu editor preferido y ajustar cualquier opción adicional según tus preferencias.",
            "outputDescription": "El editor de texto por defecto es el editor que Git usará para abrir archivos cuando te solicite realizar cambios. Es importante configurar un editor de texto que te resulte familiar y cómodo de usar.",

        },
        {
            "id": 'git-commit-alias',
            "title": 'Confirmar cambios con un alias',
            "command": 'git config --global alias.cm "commit -m"',
            "description": 'Crea un alias para el comando de commit con un mensaje. En este caso, el alias "cm" se asigna a "commit -m", permitiéndote confirmar cambios con un mensaje de manera más concisa.',
            "secondCommand":
                ` git config --global alias.cm "commit -m" `,
            "outputDescription": 'Este alias te permite usar . Puedes personalizar el alias según tus preferencias.',
            "output": `git cm \'mensaje del commit\' en lugar de git commit -m \'mensaje del commit\' `
        }


    ],
    start: [
        {
            "id": 'start-with-git',
            "title": 'Comenzando con un proyecto',
            "description": 'Ya una vez configurado, creamos un proyecto básico y vemos cuales son los comandos básicos para trabajar con él.',
        },
        {
            "id": 'git-init',
            "title": 'Iniciamos git en nuestro proyecto',
            "command": 'git init',
            "description": `Con git init creamos un nuevo repositorio de Git. Este comando crea un directorio oculto llamado .git en el directorio actual. Este directorio contiene todos los datos de control de versiones del repositorio, como los archivos, los commits y el historial de cambios.`,
            "outputDescription": 'Una vez inicializado podemos visualizar en la terminal lo siguiente:',
            "output": 'Initialized empty Git repository in C:/Users/Desktop/guia-git/.git/'
        },
        {
            "id": 'git-status',
            "title": 'Verificando el estado de nuestro proyecto',
            "command": 'git status',
            "description": `Con git status muestra el estado del directorio de trabajo y del staging area. Este comando te permite ver los cambios que se han realizado en los archivos, los archivos que no están siendo rastreados por Git y los archivos que han sido agregados al staging area pero aún no se han confirmado.`,
            "outputDescription": 'Cuando verificamos el status del proyecto, podemos notar dos salidas diferentes. Si no hay nada modificado, mostrará que no hay nada para commitear. Caso contrario, mostrará que archivos están a la espera de ser commiteados.',
            "output":
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
        },
        {
            "id": "git-add",
            "title": "Agregamos archivos al área de preparación",
            "command": `
// para un solo archivo en particular ej: git add <archivo>  
git add index.html

// con un . para todos los archivos modificados, creados u eliminados
git add .   
            `,
            "description": "Con `git add`, agregamos cambios en el archivo especificado al área de preparación de Git. Este es el primer paso en el flujo de trabajo básico de Git. Preparar los archivos te permite agrupar específicamente los cambios que quieres guardar e incluir en tu próximo commit.",
            "outputDescription": "No hay una salida específica para este comando en la terminal, pero los cambios del archivo especificado se moverán al área de preparación.",
            "output": ""
        },
        {
            "id": "git-commit",
            "title": "Confirmamos los cambios en nuestro repositorio",
            "command": "git commit -m 'mensaje del commit'",
            "description": "Con `git commit`, confirmamos los cambios que hemos agregado al área de preparación con `git add`. Este comando toma instantáneas de los cambios y guarda una referencia a esa instantánea en el historial del repositorio. El parámetro `-m` permite agregar un mensaje descriptivo al commit para documentar los cambios realizados.",
            "outputDescription": "La salida de este comando en la terminal te mostrará el número de cambios que se han confirmado y una referencia al commit.",
            "output": "[master (root-commit) 0ad5a7a] mensaje del commit\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 nombre-del-archivo"
        },
        {
            "id": "git-commit-amend",
            "title": "Modificamos el último commit en nuestro repositorio",
            "command": "git commit --amend -m 'nuevo mensaje del commit'",
            "description": "El comando `git commit --amend` se utiliza para modificar el commit más reciente. Este comando combina los cambios en el área de preparación con el último commit y crea un nuevo commit. Este nuevo commit reemplaza completamente el último commit[^1^][1]. Una de las cosas más simples que puedes hacer con `--amend` es cambiar un mensaje de commit[^1^][1].",
            "outputDescription": "La salida de este comando en la terminal te mostrará el número de cambios que se han confirmado y una referencia al commit.",
            "output": "[master eaa69ce] nuevo mensaje del commit\n Date: Thu Apr 22 12:18:52 2021 +0200\n 1 file changed, 3 insertions(+), 1 deletion(-)"
        },
        {
            "id": "git-diff",
            "title": "Visualizando las diferencias entre los archivos",
            "command": "git diff",
            "description": "El comando `git diff` muestra las diferencias entre los archivos en el directorio de trabajo y el índice. Esto te permite ver exactamente qué líneas han cambiado en tus archivos y cómo se han modificado.",
            "outputDescription": "La salida de este comando en la terminal te mostrará las diferencias entre los archivos.",
            "output": ""
        },
        {
            "id": "git-diff-staged",
            "title": "Ver los cambios que se van a confirmar",
            "command": "git diff --staged",
            "description": "Con `git diff --staged`, puedes ver exactamente qué cambios se van a confirmar en el próximo commit. Este comando muestra las diferencias entre el área de preparación y el último commit.",
            "outputDescription": "La salida de este comando en la terminal te mostrará las líneas que han sido añadidas o eliminadas en el área de preparación comparado con el último commit.",
            "output": ""
        },

        {
            "id": "git-log",
            "title": "Visualizando el historial de commits",
            "command": "git log",
            "description": "El comando `git log` muestra el historial de commits del repositorio. Cada commit en el repositorio se muestra en orden cronológico inverso (el commit más reciente se muestra primero). Quizas no te deje salir con ctrl + c o cmand + c , alt + q termina el proceso de git log para volver a escribir en la terminal.",
            "outputDescription": "La salida de este comando en la terminal te mostrará el historial de commits.",
            "output": ""
        },
        {
            "id": "git-rm",
            "title": "Eliminando archivos del repositorio",
            "command": "git rm <archivo>",
            "description": "El comando `git rm` se utiliza para eliminar archivos del directorio de trabajo y del índice. Después de ejecutar este comando, necesitarás ejecutar `git commit` para confirmar la eliminación del archivo.",
            "outputDescription": "La salida de este comando en la terminal te mostrará qué archivos se han eliminado.",
            "output": ""
        },
        {
            "id": "git-checkout",
            "title": "Cambiar a un commit específico",
            "command": "git checkout <hash_del_commit>",
            "description": "Con `git checkout`, puedes cambiar tu directorio de trabajo para reflejar el contenido de un commit específico. Este comando es útil si quieres explorar una versión anterior de tu proyecto.",
            "secondDescription": "Por ejemplo, para cambiar al commit con un hash específico, puedes ejecutar el comando de arriba.",
            "outputDescription": "Esto cambiará tu directorio de trabajo al estado del commit seleccionado y te permitirá trabajar en esa versión de tu proyecto. Notarás que tu proyecto ahora refleja el estado del commit con el hash especificado. El resultado de este comando puede variar según el commit al que te hayas cambiado. Dependiendo de los cambios en ese commit, podrías ver cambios en los archivos de tu proyecto.",
            "output": ""
        },

        {
            "id": "git-checkout-file",
            "title": "Revertir cambios en un archivo específico",
            "command": "git checkout -- <nombre_del_archivo>",
            "description": "Con `git checkout -- <nombre_del_archivo>`, puedes revertir los cambios realizados en un archivo específico a su último estado confirmado. Este comando es útil si has hecho cambios en un archivo que finalmente decides no querer conservar.",
            "outputDescription": "No hay una salida específica para este comando en la terminal, pero los cambios en el archivo especificado serán revertidos a su último estado confirmado.",
            "output": ""
        },
        {
            "id": "git-reset",
            "title": "Deshacer cambios",
            "command": "git reset --hard",
            "description": "Con `git reset --hard`, puedes deshacer todos los cambios en tu directorio de trabajo que no hayan sido confirmados con `git commit`. Este comando es útil si quieres descartar todos los cambios recientes y volver al estado del último commit.",
            "secondDescription": "Ten en cuenta que este comando es destructivo y eliminará todos los cambios no confirmados. Úsalo con precaución.",
            "outputDescription": "Al ejecutar este comando, todos los cambios no confirmados se deshacen y tu directorio de trabajo vuelve al estado del último commit. Asegúrate de estar seguro de que deseas eliminar todos los cambios no confirmados antes de ejecutar este comando.",
            "output": ""
        },
        {
            "id": "git-revert",
            "title": "Revertir un commit",
            "command": "git revert <hash_del_commit>",
            "description": "Con `git revert`, puedes crear un nuevo commit que deshace todos los cambios introducidos en un commit anterior. Este comando es útil si quieres deshacer un commit específico sin alterar el historial del repositorio.",
            "secondDescription": "El comando `git revert` no elimina el commit original, en cambio, crea un nuevo commit que deshace los cambios del commit anterior.",
            "outputDescription": "Al ejecutar `git revert`, se crea un nuevo commit que revierte los cambios del commit con el hash especificado. Esto mantiene un historial limpio y preserva la trazabilidad de los cambios en tu proyecto.",
            "output": "El commit de reversión se ha creado y ha deshecho los cambios del commit anterior."
        },
        {
            "id": "git-clean",
            "title": "Eliminar archivos no rastreados",
            "command": "git clean -f",
            "description": "Con `git clean -f`, puedes eliminar todos los archivos en tu directorio de trabajo que no están siendo rastreados por Git. Este comando es útil si quieres limpiar tu directorio de trabajo eliminando archivos innecesarios.",
            "secondDescription": "Ten en cuenta que este comando eliminará permanentemente los archivos no rastreados. Asegúrate de que no necesitas esos archivos antes de ejecutarlo.",
            "outputDescription": "Al ejecutar `git clean -f`, todos los archivos no rastreados en tu directorio de trabajo se eliminarán permanentemente. Este comando es útil para limpiar tu espacio de trabajo de archivos no deseados.",
            "output": "Todos los archivos no rastreados han sido eliminados de tu directorio de trabajo."
        }, {
            "id": "git-reset-file",
            "title": "Eliminar un archivo del área de preparación",
            "command": "git reset HEAD <nombre_del_archivo>",
            "description": "Con `git reset HEAD <nombre_del_archivo>`, puedes eliminar un archivo específico del área de preparación. Este comando es útil si has agregado un archivo al área de preparación con `git add` que finalmente decides no querer confirmar.",
            "outputDescription": "La salida de este comando en la terminal te mostrará que el archivo especificado ha sido desmarcado del área de preparación.",
            "output": "Unstaged changes after reset:\nM\tnombre_del_archivo"
        }

    ],

    branch: [
        {
            "id": 'work-with-branchs',
            "title": 'Trabajando con ramas',
            "description": 'Una vez que se conozcan los comandos básicos, podremos trabajar con las ramas. Veremos qué son, cómo se usan y sus ventajas.'
        },
        {
            "id": "git-branch-list",
            "title": "Listar todas las ramas en Git",
            "command": "git branch",
            "description": "Este comando muestra una lista de todas las ramas en tu repositorio Git. La rama actual estará resaltada y marcada con un asterisco.",
            "tips": [
                "Usa este comando para ver todas tus ramas y verificar en qué rama estás actualmente."
            ]
        },        
        {
            "id": "git-branch-create",
            "title": "Crear una nueva rama en Git",
            "command": "git branch nombre_de_la_rama",
            "description": "Este comando crea una nueva rama en tu repositorio Git. Debes reemplazar 'nombre_de_la_rama' con el nombre que desees para tu rama. Este comando no te cambia a la nueva rama, simplemente la crea.",
            "secondCommand": "git checkout -b nombre_de_la_rama",
            "secondDescription": "Este es un comando conveniente que combina la creación de una rama y el cambio a ella en un solo paso. Al igual que antes, debes reemplazar 'nombre_de_la_rama' con el nombre que desees para tu rama. El parámetro -b en el comando git checkout -b nombre_de_la_rama es una opción que le dice a Git que cree una nueva rama y luego cambie a esa rama inmediatamente. Es una combinación de los comandos git branch nombre_de_la_rama y git checkout nombre_de_la_rama.  Entonces, si ejecutas git checkout -b nueva_rama, Git creará una rama llamada nueva_rama y luego te moverá a esa rama en un solo paso. Es una forma rápida y conveniente de crear y cambiar a una nueva rama al mismo tiempo. ",
            "output": "Output en terminal: nombre_de_la_rama",
            "outputDescription": "Cuando ejecutas el comando 'git branch', se muestra una lista de todas las ramas en tu repositorio. La rama en la que te encuentras actualmente estará resaltada y marcada con un asterisco.",
            "tips": [
                "Es una buena práctica nombrar las ramas de manera descriptiva según el trabajo que se vaya a realizar en ellas. Por ejemplo, si estás creando un nuevo componente de usuario, podrías nombrar tu rama 'componente-usuario'.",
                "Recuerda que debes hacer 'commit' de tus cambios antes de cambiar a una nueva rama, para no perder tu trabajo. Por ejemplo, si estás en la rama 'master' y tienes cambios sin confirmar, debes hacer 'commit' de esos cambios antes de ejecutar 'git checkout -b componente-usuario'. De lo contrario, esos cambios se trasladarán a tu nueva rama."
            ]
        },
        {
            "id": "git-branch-delete",
            "title": "Eliminar una rama en Git",
            "command": "git branch -d nombre_de_la_rama",
            "description": "Este comando elimina una rama de tu repositorio Git. Debes reemplazar 'nombre_de_la_rama' con el nombre de la rama que deseas eliminar. Este comando solo eliminará la rama si ya has fusionado sus cambios en otra rama.",
            "secondCommand": "git branch -D nombre_de_la_rama",
            "secondDescription": "Este comando forzará la eliminación de la rama, independientemente de si has fusionado sus cambios. Esto puede ser peligroso, así que asegúrate de que realmente quieres eliminar permanentemente la rama y todos sus cambios.",
            "output": "Output en terminal: Deleted branch nombre_de_la_rama",
            "outputDescription": "Cuando ejecutas el comando 'git branch -d', se muestra un mensaje indicando que la rama ha sido eliminada. Si la rama no se puede eliminar porque contiene cambios no fusionados, Git te lo hará saber.",
            "tips": [
                "git branch -d nombre_de_la_rama: El parámetro -d (delete) se utiliza para eliminar una rama. Sin embargo, este comando solo eliminará la rama si sus cambios han sido fusionados en otra rama. Si la rama tiene cambios que no se han fusionado, Git te advertirá y no permitirá la eliminación de la rama.",
                "git branch -D nombre_de_la_rama: El parámetro -D es una versión forzada del comando anterior. Este comando eliminará la rama independientemente de si sus cambios han sido fusionados. Esto puede ser peligroso porque puedes perder cambios permanentemente, así que debes usarlo con precaución.",
                "Es una buena práctica asegurarte de que has fusionado todos los cambios que deseas conservar antes de eliminar una rama.",
                "Usa el comando 'git branch' para verificar qué ramas existen y el comando 'git checkout nombre_de_la_rama' para cambiar a una rama y revisar sus cambios antes de eliminarla.",

            ]
        },
        {
            "id": "git-merge",
            "title": "Fusionar una rama en Git",
            "command": "git merge nombre_de_la_rama",
            "description": "Este comando fusiona los cambios de la rama especificada en la rama actual. Debes reemplazar 'nombre_de_la_rama' con el nombre de la rama que deseas fusionar.",
            "tips": [
                "Antes de fusionar, asegúrate de que estás en la rama a la que deseas fusionar los cambios. Puedes usar 'git checkout nombre_de_la_rama' para cambiar a la rama correcta.",
                "Es posible que debas resolver conflictos de fusión si Git no puede fusionar automáticamente los cambios."
            ]
        },
        {
            "id": "git-branch-rename",
            "title": "Renombrar una rama en Git",
            "command": "git branch -m nombre_antiguo nombre_nuevo",
            "description": "Este comando renombra una rama en tu repositorio Git. Debes reemplazar 'nombre_antiguo' con el nombre actual de la rama, y 'nombre_nuevo' con el nuevo nombre que deseas para la rama.",
            "tips": [
                "Asegúrate de que no estás en la rama que deseas renombrar antes de ejecutar este comando."
            ]
        },
        {
            "id": "git-branch-merged",
            "title": "Verificar las ramas fusionadas y no fusionadas en Git ",
            "command": "git branch --merged",
            "description": "Este comando muestra todas las ramas que han sido fusionadas en la rama actual.",
            "secondCommand":"git branch --no-merged",
            "secondDescription":"Este comando muestra todas las ramas que tienen cambios que aún no se han fusionado en la rama actual.",
            "tips": [
                "git branch --merged es útil para saber qué ramas ya han sido fusionadas y podrían ser eliminadas.",
                "git branch --no-merged es útil para saber qué ramas tienen cambios que aún necesitan ser revisados o fusionados."
            ]
        },
        {
            "id": "git-rebase",
            "title": "Reorganizar los commits con Git Rebase",
            "command": "git rebase nombre_de_la_rama_base",
            "description": "El comando 'git rebase' se utiliza para mover o combinar una secuencia de commits a una nueva base de commit. Es muy útil cuando quieres mantener tu rama de trabajo actualizada con los últimos cambios de la rama principal (por lo general, 'master' o 'main'). Debes reemplazar 'nombre_de_la_rama_base' con el nombre de la rama que tiene los nuevos cambios que deseas incluir en tu rama de trabajo.",
            "secondCommand": "git rebase -i HEAD~n",
            "secondDescription": "El comando 'git rebase -i HEAD~n' se utiliza para reorganizar los últimos 'n' commits de manera interactiva. Puedes reemplazar 'n' con el número de commits que deseas reorganizar. Este comando abrirá un editor de texto donde puedes elegir qué hacer con cada commit: reordenarlos, editar el mensaje del commit, combinar commits, etc.",
            "output": "Output en terminal: Successfully rebased and updated refs/heads/nombre_de_tu_rama.",
            "outputDescription": "Cuando ejecutas el comando 'git rebase', se muestra un mensaje indicando que Git ha reorganizado los commits exitosamente. Si hay conflictos entre los commits, Git te lo hará saber y tendrás que resolverlos manualmente.",
            "tips": [
                "Antes de hacer 'rebase', es una buena práctica asegurarte de que has guardado tu trabajo actual. El rebase puede ser peligroso porque estás reescribiendo la historia del repositorio.",
                "Si estás trabajando en un equipo, es importante comunicar cuándo haces 'rebase' de cambios importantes para que todos estén al tanto.",
                "Si el 'rebase' se complica, puedes abortarlo en cualquier momento con el comando 'git rebase --abort'."
            ]
        }
        
        
        
        
        


    ],

    github: [
        {
            "id": "work-with-github",
            "title": "Utilizando GitHub",
            "description": "GitHub es una plataforma web onlineque se utiliza en conjunto con Git para facilitar la colaboración en proyectos de desarrollo de software. Permite a los equipos de desarrollo almacenar, gestionar y colaborar en repositorios de código de manera eficiente. Esto te ofrece una variedad de herramientas y características que mejoran la administración de proyectos y el seguimiento de cambios en el código fuente."
        },
        {
            "id": "git-conectar-repo-github",
            "title": "Conectar un repositorio local con GitHub",
            "description": "Con el comando `git remote`, puedes conectar un repositorio Git local con un repositorio en GitHub. Esto te permite sincronizar tu repositorio local con el repositorio en GitHub y colaborar con otros desarrolladores en línea.",
            "command": "git remote add origin <url_del_repositorio_github>",
            "outputDescription": "La salida de este comando en la terminal te mostrará que has configurado un nuevo control remoto llamado 'origin' que apunta al repositorio en GitHub.",
            "output": "origin\t<url_del_repositorio_github> (fetch)\norigin\t<url_del_repositorio_github> (push)",
            "tips": [
                "Reemplaza `<url_del_repositorio_github>` con la URL del repositorio de GitHub que deseas conectar.",
                "Asegúrate de tener una cuenta en GitHub y los permisos adecuados para el repositorio."
            ]
        }
        ,
        {
            "id": "git-reset-remote",
            "title": "Borrar y Configurar Repositorio Remoto",
            "command": "git remote remove origin && git remote add origin <URL_del_nuevo_repo>",
            "description": "Con `git reset-remote`, puedes borrar el repositorio remoto actualmente configurado y establecer uno nuevo. Este comando es útil cuando deseas cambiar la ubicación del repositorio remoto de tu proyecto.",
            "secondDescription": "Por ejemplo, para borrar el repositorio remoto actual y agregar uno nuevo, puedes ejecutar:",
            "secondCommand": "git remote remove origin && git remote add origin <URL_del_nuevo_repo>",
            "outputDescription": "Al ejecutar este comando, verás la salida en la terminal que muestra el resultado de la operación. Dependiendo de si se ejecuta correctamente o si hay errores, la salida variará. Esto mostrará información sobre la eliminación del repositorio remoto actual y la adición del nuevo repositorio remoto. Asegúrate de revisar la salida para verificar que la operación se realizó correctamente.",
            "output": ""
        }
        ,

        {
            "id": "git-clone",
            "title": "Clonar un repositorio existente",
            "command": "git clone <url_del_repositorio>",
            "description": "Con `git clone`, puedes copiar un repositorio Git existente a tu máquina local. Este comando crea una copia del repositorio en un nuevo directorio en tu máquina local y descarga todos los datos del repositorio, incluyendo el historial de versiones.",
            "outputDescription": "La salida de este comando en la terminal te mostrará el proceso de clonación del repositorio.",
            "output": "Cloning into 'nombre-del-repositorio'..."
        },
        {
            "id": "git-pull",
            "title": "Actualizar tu repositorio local con `git pull`",
            "command": "git pull",
            "description": "El comando `git pull` es una operación fundamental en Git y en el trabajo en equipo, que se utiliza para mantener actualizado tu repositorio local con los cambios más recientes del repositorio remoto. Facilita este proceso al combinar dos pasos esenciales en uno.",
            "outputDescription": "Cuando ejecutas `git pull`, la terminal mostrará información detallada sobre los cambios que se han recuperado y combinado en tu repositorio local. Esta información incluye detalles sobre las ramas y commits que se han actualizado.",
            "output": "Auto-merging archivo.txt\nCONFLICT (contenido): Conflicto de fusión en archivo.txt\nActualizado 05b34e9..3a6b648"
        },
        {
            "id": "git-fetch",
            "title": "Obtener los últimos cambios del repositorio remoto",
            "command": "git fetch nombre_del_remoto",
            "description": "Este comando se utiliza para obtener las últimas ramas y commits del repositorio remoto. Debes reemplazar 'nombre_del_remoto' con el nombre del repositorio remoto, que por lo general es 'origin'. Este comando no fusiona automáticamente los cambios en tu rama local, solo los descarga para que puedas verlos o fusionarlos manualmente.",
            "secondCommand": "git fetch nombre_del_remoto nombre_de_la_rama",
            "secondDescription": "Este comando obtiene los últimos commits de una rama específica del repositorio remoto. Debes reemplazar 'nombre_del_remoto' con el nombre del repositorio remoto y 'nombre_de_la_rama' con el nombre de la rama que deseas actualizar.",
            "output": "Output en terminal: remote: Enumerating objects: 5, done.",
            "outputDescription": "Cuando ejecutas el comando 'git fetch', se muestra un mensaje indicando que Git está descargando los objetos (commits) del repositorio remoto. El número de objetos puede variar.",
            "tips": [
                "Es una buena práctica ejecutar 'git fetch' regularmente para mantenerse al día con los cambios que otros puedan estar haciendo en el repositorio remoto.",
                "Después de ejecutar 'git fetch', puedes usar 'git merge' para fusionar los cambios en tu rama local o 'git diff' para ver las diferencias entre tu rama local y la rama remota."
            ]
        },{
            "id": "git-push",
            "title": "Subir los cambios a una rama remota",
            "command": "git push nombre_del_remoto nombre_de_la_rama",
            "description": "Este comando se utiliza para subir los commits de tu rama local al repositorio remoto. Debes reemplazar 'nombre_del_remoto' con el nombre del repositorio remoto, que por lo general es 'origin', y 'nombre_de_la_rama' con el nombre de la rama que deseas actualizar en el repositorio remoto.",
            "secondCommand": "git push nombre_del_remoto nombre_de_la_rama:nombre_de_la_rama_remota",
            "secondDescription": "Este comando sube los commits de tu rama local a una rama específica en el repositorio remoto. Debes reemplazar 'nombre_del_remoto' con el nombre del repositorio remoto, 'nombre_de_la_rama' con el nombre de tu rama local, y 'nombre_de_la_rama_remota' con el nombre de la rama que deseas actualizar en el repositorio remoto.",
            "output": "Output en terminal: To https://github.com/feralarcon1995/guia-git.git",
            "outputDescription": "Cuando ejecutas el comando 'git push', se muestra un mensaje indicando que Git está subiendo los commits al repositorio remoto. Si la subida es exitosa, verás un resumen de los cambios.",
            "tips": [
                "Antes de hacer 'push' de tus cambios, es una buena práctica hacer 'pull' o 'fetch' para obtener los últimos cambios del repositorio remoto y asegurarte de que tu rama local está actualizada.",
                "Si estás trabajando en un equipo, es importante comunicar cuándo haces 'push' de cambios importantes para que todos estén al tanto."
            ]
        },
        {
            "id": "git-push-delete",
            "title": "Eliminar una rama remota",
            "command": "git push nombre_del_remoto --delete nombre_de_la_rama",
            "description": "Este comando se utiliza para eliminar una rama del repositorio remoto. Debes reemplazar 'nombre_del_remoto' con el nombre del repositorio remoto, que por lo general es 'origin', y 'nombre_de_la_rama' con el nombre de la rama que deseas eliminar en el repositorio remoto.",
            "output": "Output en terminal: To https://github.com/feralarcon1995/guia-git.git",
            "outputDescription": "Cuando ejecutas el comando 'git push', se muestra un mensaje indicando que Git está eliminando la rama del repositorio remoto. Si la eliminación es exitosa, verás un resumen de los cambios.",
            "tips": [
                "Antes de eliminar una rama remota, es una buena práctica asegurarte de que has fusionado todos los cambios que deseas conservar en otra rama.",
                "Si estás trabajando en un equipo, es importante comunicar cuándo eliminas una rama remota para que todos estén al tanto."
            ]
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