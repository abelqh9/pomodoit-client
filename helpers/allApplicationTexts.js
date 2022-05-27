export let allApplicationTexts = {
    English:{
        header:{
            score:"SCORE",

            historyModal: {
                title:"History", 

                one: "Hi user, how are you? I hope fine 😃.", 

                two: "If you hope that this modal contain important information for the app, you are wrong haha 😅. This modal was created because i wanted explain why i did this productivity application ✍️.", 

                three: "Well, to begin with, at this point in my life, I am a 19-year-old boy who likes to know the time he spends doing his activities ⏲, always looking to be more efficient 🤓 (I saw it in a youtube video 🎥 and yes, it works).",

                four: "I always used the timer on my phone and my whiteboard, to record all my efficient hours in the day and what things I spent them on ✔️, and it is not a bad idea, many people do the same, but one day looking for ideas for my first project (I want to become a junior programmer 🧑‍💻), I heard the timer alarm 🔊 and I said \"Oh I got it ... and ... I can do it 😎\".",

                five:"looked for my idea in the browser, there were already other applications trying to do the same 😥, but I didn't like any of them, so I said \"I'm going to do it 😎, maybe someone else with my weird tastes will like it\" 👥.",

                six: "And this is how this application was born, I hope that you, the user who is reading this unnecessary text, enjoy Pomodoit just as I enjoyed building it ❤️.",

                seven: "Oh by the way, I know the name \"Pomodoit\" is silly 💩, don't judge me haha. Bye 😛.",
            },
    
            RecordsModal: {
                title:"Records", 
                filterBy:"Filter by:", 
                yearTotal:"Year Total:",
                monthTotal:"Month Total:", 
                hours:"Hours", 
                scores:"Scores", 
                distractions:"Distractions", 
                year:"Year", 
                month:"Month",
                day:"Days",
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                noUser: "You have to have an account for have records"
            },
    
            ToDosModal: {
                one:"All the ToDos you have created will appear here", 
                twoOne:"Return the ToDo in the \"Your ToDos\" chart", 
                twoTwo:"Delete the ToDo for ever",
                filterBy:"Order by:", 
                lessRecents:"Less recents", 
                moreRecents:"More recents", 
                lessTime:"Less Time",
                moreTime:"More Time", 
                all:"All", 
                active:"Active", 
                completed:"Completed", 
                description:"Description", 
                time:"Time", 
                creation:"Creation",
                noTodosText:"You don't have any ToDo register"
            },

            AuthenticationModal:{
                logOut:"Log Out",
                logIn:"Log In",
                signUp:"Sign Up",
        
                password:"Password",
                confirmPassword:"Confirmation Password",
                needAccount:"Need an account?",
                alreadyAccount:"Already have an account?",
        
                noEmailError:"You have to put the email",
                noPasswordError:"You have to put the password",
                putPasswordsError:"You have to put the password twice",
                PasswordsNotSimilarError:"The passwords dont are similar",
                shortPasswordError:"The password has to be longer than 8 characters",

                failedLogIn:"Failed to log in",
                failedSignUp:"Failed to sign up",
                failedResetPassword:"Your password could not be reset",

                checkYourEmail: "Check your e-mail",
                yourEmail: "Your email...",
                yourPassword: "Your password...",
                ForgotPassword: "Forgot your password?",
                resetPassword: "Reset your Password",
                resetPasswordInfo: "Don't worry, we will send you an email so you can reset you password :)",
                sendEmail: "Send email",

            },

            UserModal:{
                sureChangePassword:"Are you sure about change your password?",
                sureChangeEmail:"Are you sure about change your email to: ",

                passwordBeenUpdated:"Password have been updated :)",
                emailBeenUpdated:"Email have been updated :)",

                changePasswordError:"Password change failed",
                changeEmailError:"Email change failed",

                accountDate:" Account creation date",
                bestDay:" Your best day",
                totalHours:" Total of work hours in Pomodoit",
                monthLevel:" Your month level",
                nextLevel:" Next level",

                wantUpdatePassword:"You want update your password?",
                wantUpdateEmail:"You want update your Email?",

                newPassword:"New password",
                newEmail:"New email",

                Update:"Update",
            },

            distractions: "Distractions:"
        },

        pomodoro: {
            noState:"SET THE TIMES FOR START :)",

            work:"WORK",
            rest:"REST",
            stop:"STOP",
            readyFor:"READY FOR",

            assignTimeAlert:"YOU HAVE TO ASSIGN THE POMODORO TIMES",
            restartConfirm:"Do you really want to restart the pomodoro?",

            // workTime:"Work time", 
            // restTime:"Rest time",

            workTime:"Work", 
            restTime:"Rest",

            startButton:"Start",
            stopButton:"Stop",
            restartButton:"Restart",
            resumeButton:"Resume",
        },

        todos: {
            addTodo:"ADD TODO", 
            inputText:"Create a new ToDo...", 
            yourTodos:"YOUR TODOS", 
            todaysHours:"Today's hours:", 
            description:"Description", 
            today:"Today", 
            all:"All",
            noTodos:"Start to work on a ToDo"
        },

        footer:{
            todayMotivation:"Today's motivation",
            noAccount:"You have to have an account for have a daily motivational phrase",
            motivationsPhrases: ['1. "It always seems impossible until it is done" (Nelson Mandela)', '2. "Motivation is what gets you going, habit is what keeps you going" (Jim Ryun)', '3. "Study the past if you want to intuit the future" (Confucius)' ,'4. "If you don\'t like the way things are, change them" (Jim Rohn)', '5. "Don\'t let what you can\'t do interfere with what you can do" (John R. Wooden) ',' 6. "Good fortune favors the daring" (Virgilio) ',' 7. "You can always be better" (Tiger Woods) ',' 8. "There is no substitute for hard work" (Thomas Edison) ',' 9. "I have failed over and over again throughout my life. That is why I have succeeded" (Michael Jordan) ', '10. "Without studying the soul becomes ill" (Seneca) ', '11. "The man who is a master of patience is a master of everything else" (George Saville) ', '12. "A book is like a garden that you can carry in your pocket" (Chinese Proverb) ', '13. "If we did all the things we are capable of, we would be amazed" (Thomas Edison) ', '14. "The more I work, the luckier I seem to have" (Thomas Jefferson) ', '15. "Quality is never an accident, it is always the result of an effort of intelligence" (John Ruskiin)', '16. "Change your thoughts and you will change your world" (Norman Vincent Peale) ', '17. "Your talents and abilities will improve over time, but for that you have to start" (Martin Luther King)', '18. "True education consists in getting the best of yourself" (Mahatma Gandhi)', '19. "Our patience will accomplish more than our strength" (Edmund Burke) ', '20. "Books are dangerous. The best ones should be labeled \'This could change your life\'" (Helen Exley)', '21. "Your most important education is not happening in a classroom" (Jim Rohn)', '22. "Youth is the time to study wisdom; old age, to practice it" (Jean Jacques Rousseau)', '23. "If you don\'t go all the way, why start?" (Joe Namath)', '24. "Learning without thinking is useless. Thinking without learning, dangerous" (Confucius)', '25. "Champions keep playing until they get it right" (Billie Jean King)', '26. "Use all your efforts, even when the odds are against you" (Arnold Palmer)', '27. "The wonderful thing about learning something is that no one can take it away from us" (B. B. King)', '28. "Quality is not an act, but a habit" (Aristotle)​​', '29. "Set yourself tough goals and don\'t stop until you get there" (Bo Jackson)', '30. "The man well prepared for the fight has achieved half a victory" (Miguel de Cervantes)', '31. "The most effective way to do it is to do it" (Amelia Earhat)', '32. "Everything is practical" (Pelé)', '33. "It is possible to recover from a defeat, but it costs more to forgive yourself for not having tried" (George Edward Woodberry)', '34. "You are more than capable of finding success, but it will only happen if you put yourself at it" (Vince Lombardi)', '35. "The best way to predict the future is to create it" (Peter Drucker)','36. "The only place where success comes before work is the dictionary" (Vidal Sassoon)', '37. "He who is afraid to ask is ashamed to learn" (Danish proverb) ', '38. "Perseverance can transform failure into extraordinary achievement" (Matt Biondi)', '39. "Patience, perseverance and sweat make an invincible combination to achieve success" (Napoleon Hill)', '40. "Success depends on effort" (Sophocles)', '41. "No one who has given the best of himself has ever regretted it" (George Halas) ', '42. "Without self-discipline, success is impossible" (Lou Holz)', '43. "He who has not given everything has not given anything" (Helenio Herrera)', '45. "Energy and persistence conquer all things" (Benjamin Franklin)', '46. "Any effort is light with the habit" (Tito Livio)', '47. "Make each day a masterpiece" (John Wooden)', '48. "Be patient; all things are difficult until they become easy" (Saadi)', '49. "What\'s the point of living if you don\'t do at least one remarkable thing?" (Anonymous)', '50. "The secret of moving forward is getting started" (Mark Twain)', '51. "Be patient with all things, especially with yourself" (Saint Francis de Sales)', '52. "Never give up! Failure and rejection are only the first step to success" (Jim Valvano)', '53. "Do not look at the clock; do the same as him, go forward" (Sam Levenson)', '54. "Patience is bitter but its fruits are sweet" (Jean Jacques Rousseau)', '55. "Do your best. What you sow today will bear fruit tomorrow" (Og Mandino)', '56. "It doesn\'t matter how slow you go as long as you don\'t stop" (Confucius)', '57. "Accept challenges to feel the euphoria of triumph" (George S. Patton)', '58. "Winning is not everything, but wanting to win is" (Vince Lombardi)', '59. "What you can do today can improve all your tomorrows" (Ralph Martson)', '60. "Problems are not stop signs, they are guidelines" (Robert H. Schuller)', '61. "You can find defeats, but you must not be defeated" (Maya Angelou)', '62. "It\'s not that I\'m very smart, it\'s that I stay longer working on problems" (Albert Einstein)', '63. "Perseverance is falling 19 times and getting up 20" (Julie Andrews)'],
            madePhrase1:"Made with ",
            madePhrase2:"by"
        }
    },
    Español:{
        header:{
            score:"PUNTOS",

            historyModal: {
                title:"Historia",
    
                one: "- Hola usuario, cómo estás? Espero que bien 😃.", 
    
                two: "- Si estas esperando que esta ventana modal contenga información importante para el uso de la app, estas equivocado haha 😅. Esta ventana modal fue creada porque yo quería explicar como hice esta aplicación de productividad ✍️.",
    
                three: "- Bueno, para empezar, en este punto de mi vida, soy un chico de 19 años al cuál le gusta saber cuánto tiempo gasta haciendo sus actividades, siempre buscando ser más eficiente 🤓 (lo ví en un video de YouTube 🎥 y sí, funciona) ⏲️.",

                four: "-  Yo siempre usaba el temporizador de mi celular y mi pizarra para registar todas mis horas productivas en el día y en que cosas las gastaba ✔️, y no es una mala idea, muchas personas hacen lo mismo, pero un día pensando en ideas para mi primer proyecto (Quiero convertirme en un programador junior 🧑‍💻), escuché la alarma del temporizador 🔊 y dijé \"Lo tengo ... y ... puedo hacerlo 😎\".",

                five:"- Busqué mi idea en el navegador, y ya habían otras aplicaciones que trataban de hacer lo mismo 😥, pero no me gustó niguna de ellas, entonces dije \"Voy a hacerlo 😎, tal vez alguien más comparta mis raros gustos y le guste\" 👥.",

                six: "- Y así es como esta aplicación nació, espero que tú, el usuario que está leyendo este innecesario texto, disfrute Pomodoit tanto como yo disfruté haciendolo ❤️.",

                seven: "- Ah por cierto, ya sé que el nombre \"Pomodoit\" es tonto 💩, no me juzgues haha. Adios 😛.",
            },
    
            RecordsModal: {
                title:"Estadisticas", 
                filterBy:"Filtrar por:", 
                yearTotal:"Total del año:",
                monthTotal:"Total del mes:", 
                hours:"Horas", 
                scores:"Puntos", 
                distractions:"Distraciones", 
                year:"Año", 
                month:"Mes",
                day:"Días",
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                noUser: "Tienes que tener una cuenta para tener estadísticas"
            },
    
            ToDosModal: {
                one:"ToDos los ToDos que has creado apareceran aquí", 
                twoOne:"Devuelve el ToDo al cuadro de \"Your ToDos\"", 
                twoTwo:"Elimina el ToDo para siempre",
                filterBy:"Ordenar por:",
                lessRecents:"Menos recientes", 
                moreRecents:"Más recientes", 
                lessTime:"Menos Tiempo",
                moreTime:"Más Tiempo", all:"Todos", 
                active:"Activos", 
                completed:"Completados", 
                description:"Descripción",
                time:"Tiempo",
                creation:"Creación",
                noTodosText:"No tienes ningún ToDo registrado"
            },

            AuthenticationModal:{
                logOut:"Cerrar Sesión",
                logIn:"Iniciar Sesión",
                signUp:"Registrate",
        
                password:"Contraseña",
                confirmPassword:"Confirmar Contraseña",
                needAccount:"Necesitas una cuenta?",
                alreadyAccount:"Ya tienes una cuenta?",
        
                noEmailError:"Tienes que introducir el email",
                noPasswordError:"Tienes que introducir la contraseña",
                putPasswordsError:"Tienes que introducir la contraseña dos veces",
                PasswordsNotSimilarError:"Las contraseñas no son similares",
                shortPasswordError:"La contraseña debe tener más de 8 caracteres",
        
                failedLogIn:"No se pudo iniciar de sesión",
                failedSignUp:"No se pudo registrar del usuario",

                failedResetPassword:"Su contraseña no pudo ser reestablecida",
                checkYourEmail: "revise su correo electrónico",
                yourEmail: "Tu email...",
                yourPassword: "Tu password...",
                ForgotPassword: "Olvidaste tu contraseña?",
                resetPassword: "Restablece tu contraseña",

                resetPasswordInfo: "No se preocupe, le enviaremos un correo electrónico para que pueda restablecer su contraseña :)",

                sendEmail: "Enviar correo electrónico"
            },

            UserModal:{
                sureChangePassword:"Estás seguro de cambiar tu contraseña?",
                sureChangeEmail:"Estás seguro de cambiar tu correo electrónico a: ",

                passwordBeenUpdated:"La contraseña se ha actualizado :)",
                emailBeenUpdated:"El correo electrónico se ha actualizado :)",

                changePasswordError:"El cambio de contraseña falló",
                changeEmailError:"Error en el cambio de correo electrónico",

                accountDate:" Fecha de creación de la cuenta",
                bestDay:" Tu mejor día",
                totalHours:" Total de horas de trabajo en Pomodoit",
                monthLevel:" Tu nivel de este mes",
                nextLevel:" Siguiente nivel",

                wantUpdatePassword:"Quieres actualizar tu contraseña?",
                wantUpdateEmail:"Quieres actualizar tu correo electrónico?",

                newPassword:"Nueva contraseña",
                newEmail:"Nuevo email",

                Update:"Actualizar",
            },

            distractions: "Distracciones:"
        },

        pomodoro: {
            noState:"ESTABLECE LOS TIEMPOS PARA EMPEZAR :)", 

            work:"TRABAJAR",
            rest:"DESCANSAR",
            stop:"PAUSA",
            readyFor:"LISTO PARA",

            assignTimeAlert:"TIENES QUE ASIGNAR LOS TIEMPOS DEL POMODORO",
            restartConfirm:"Seguro que quieres reiniciar el pomodoro?",

            // workTime:"Tiempo trabajo", 
            // restTime:"Tiempo descanso", 
            workTime:"Trabajo", 
            restTime:"Descanso", 

            startButton:"Empezar", 
            stopButton:"Parar", 
            restartButton:"Reiniciar",
            resumeButton:"Continuar",
        },

        todos: {
            addTodo:"AÑADE UN TODO", 
            inputText:"Crea un nuevo ToDo...", 
            yourTodos:"TUS TODOS", 
            todaysHours:"Horas de hoy:", 
            description:"Descripción", 
            today:"Hoy", 
            all:"Total",
            noTodos:"Empieza a trabajar en un ToDo"
        },

        footer:{
            todayMotivation:"Motivación del día",
            noAccount:"Tienes que tener una cuenta para poder tener una frase motivacional diaria",
            motivationsPhrases: ['1. "Siempre parece imposible hasta que se hace" (Nelson Mandela)', '2. "La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas" (Jim Ryun)', '3. "Estudia el pasado si quieres intuir el futuro" (Confucio)', '4. "Si no te gusta cómo son las cosas, cámbialas" (Jim Rohn)', '5. "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer" (John R. Wooden)', '6. "La buena fortuna favorece a los atrevidos" (Virgilio)', '7. "Siempre se puede ser mejor" (Tiger Woods)', '8. "No hay un sustituto para el trabajo duro" (Thomas Edison)', '9. "He fallado una y otra vez a lo largo de mi vida. Es por eso por lo que he tenido éxito" (Michael Jordan)', '10. "Sin estudiar enferma el alma" (Séneca)', '11. "El hombre que es un maestro de la paciencia es un maestro de todo lo demás" (George Saville)', '12. "Un libro es como un jardín que se puede llevar en el bolsillo" (Proverbio chino)', '13. "Si hiciésemos todas las cosas de las que somos capaces, nos asombraríamos" (Thomas Edison)', '14. "Cuanto más trabajo, más suerte parezco tener" (Thomas Jefferson)', '15. "La calidad nunca es un accidente, siempre es resultado de un esfuerzo de la inteligencia" (John Ruskiin)', '16. "Cambia tus pensamientos y cambiarás tu mundo" (Norman Vincent Peale)', '17. "Tus talentos y habilidades irán mejorando con el tiempo, pero para eso has de empezar" (Martin Luther King)', '18. "La verdadera educación consiste en obtener lo mejor de uno mismo" (Mahatma Gandhi)', '19. "Nuestra paciencia conseguirá más cosas que nuestra fuerza" (Edmund Burke)', '20. "Los libros son peligrosos. Los mejores deberían ser etiquetados con un "Esto podría cambiar tu vida"" (Helen Exley)', '21. "Tu educación más importante no está ocurriendo en una clase" (Jim Rohn)', '22. "La juventud es el momento de estudiar la sabiduría; la vejez, el de practicarla" (Jean Jacques Rousseau)', '23. "Si no vas hasta el final ¿por qué empezar?" (Joe Namath)', '24." Aprender sin pensar es inútil. Pensar sin aprender, peligroso" (Confucio)', '25. "Los campeones siguen jugando hasta que lo hacen bien" (Billie Jean King)', '26. "Emplea todos tus esfuerzos, incluso cuando las posibilidades jueguen en tu contra" (Arnold Palmer)', '27. "Lo maravilloso de aprender algo es que nadie puede arrebatárnoslo" (B. B. King)', '28. "La calidad no es un acto, sino un hábito" (Aristóteles)', '29. "Ponte objetivos arduos y no pares hasta llegar ahí" (Bo Jackson)', '30. "El hombre bien preparado para la lucha ha conseguido medio triunfo" (Miguel de Cervantes)', '31. "La manera más efectiva de hacerlo es hacerlo" (Amelia Earhat)', '32. "Todo es práctica" (Pelé)', '33. "Es posible recuperarse de una derrota, pero cuesta más perdonarse a uno mismo por no haberlo intentado" (George Edward Woodberry)', '34. "Eres más que capaz de encontrar el éxito, pero solo ocurrirá si te pones a ello" (Vince Lombardi)', '35. "La mejor forma de predecir el futuro es crearlo" (Peter Drucker)', '36. "El único lugar en el que el éxito viene antes que el trabajo es el diccionario" (Vidal Sassoon)', '37. "A quien teme preguntar le da vergüenza aprender" (Proverbio danés)', '38. "La perseverancia puede transformar el fracaso en un logro extraordinario" (Matt Biondi)', '39. "La paciencia, la perseverancia y el sudor hacen una combinación invencible para llegar al éxito" (Napoleon Hill)', '40. "El éxito depende del esfuerzo" (Sófocles)', '41. "Nadie que haya dado lo mejor de sí mismo lo ha lamentado nunca" (George Halas)', '42. "Sin autodisciplina, el éxito es imposible" (Lou Holz)', '43. "Quien no lo ha dado todo no ha dado nada" (Helenio Herrera)', '45. "La energía y la persistencia conquistan todas las cosas" (Benjamin Franklin)', '46. "Cualquier esfuerzo resulta ligero con el hábito" (Tito Livio)', '47. "Haz de cada día una obra maestra" (John Wooden)', '48. "Ten paciencia; todas las cosas son difíciles hasta que se hacen fáciles" (Saadi)', '49. "¿Cuál es el sentido de vivir si no haces al menos una cosa destacable?" (Anónimo)', '50. "El secreto de ir avanzando es empezar" (Mark Twain)', '51. "Ten paciencia con todas las cosas, especialmente con ti mismo" (Saint Francis de Sales)', '52. "¡Nunca te rindas! El fracaso y el rechazo son solo el primer escalón hacia el éxito" (Jim Valvano)', '53. "No mires el reloj; haz lo mismo que él, ve avanzando" (Sam Levenson)', '54. "La paciencia es amarga pero sus frutos son dulces" (Jean Jacques Rousseau)', '55. "Esfuérzate al máximo. Lo que siembres hoy dará sus frutos mañana" (Og Mandino)', '56. "No importa cuán despacio vayas mientras no te detengas" (Confucio)', '57. "Acepta los retos para sentir la euforia del triunfo" (George S. Patton)', '58. "Ganar no lo es todo, pero querer ganar sí lo es" (Vince Lombardi)', '59. "Lo que puedes hacer hoy puede mejorar todos tus mañanas" (Ralph Martson)', '60. "Los problemas no son signos de Stop, son pautas" (Robert H. Schuller)', '61. "Puedes encontrar derrotas, pero no debes ser derrotado" (Maya Angelou)', '62. "No es que sea muy listo, es que me quedo durante más tiempo trabajando en los problemas" (Albert Einstein)', '63. "La perseverancia es caer 19 veces y levantarse 20" (Julie Andrews)'],
            madePhrase1:"Hecho con el ",
            madePhrase2:"por"
        }
    },
    Português:{
        header:{
            score:"PONTOS",

            historyModal: {
                title:"História",

                one: "- Ola usuario tudo bem Espero que bem 😃.", 

                two: "- Se você está esperando que esta janela modal contenha informações importantes para o uso do aplicativo, você está errado haha 😅. Esta janela modal foi criada porque eu queria explicar por que fiz este aplicativo de produtividade ✍️.",

                three: "- Bem, para começar, a essa altura da minha vida, sou um garoto de 19 anos que gosta de saber quanto tempo passa fazendo suas atividades, sempre buscando ser mais eficiente. 🤓 (Eu vi em um vídeo do YouTube 🎥 e sim, funciona) ⏲️.",

                four: "- Sempre usei o cronômetro do meu celular e meu quadro-negro para registrar todas as minhas horas produtivas durante o dia e em que coisas as gastei ✔️, e não é uma ideia, muitas pessoas fazem o mesmo, mas um dia pensando em ideias para o meu primeiro projeto (Eu quero me tornar um programador júnior 🧑‍💻), Eu ouvi o alarme do temporizador 🔊 e eu disse \"Eu tenho ... e ... eu posso fazer isso 😎\".",

                five:"- Então eu procurei minha ideia no navegador, e já havia outros aplicativos tentando fazer o mesmo 😥, mas eu não gostei de nenhum deles, então eu disse \"Vou fazer 😎, talvez outra pessoa compartilhe meus gostos estranhos e goste\" 👥.",

                six: "- E foi assim que nasceu este aplicativo, espero que você, o usuário que está lendo este texto desnecessário, aproveite o Pomodoit tanto quanto eu gostei de fazê-lo ❤️.",

                seven: "- A propósito, eu sei o nome \"Pomodoit\" é tonto 💩, não me julgue haha. Tchau 😛.",
            },
    
            RecordsModal: {
                title:"Estatísticas", 
                filterBy:"Filtrar por:",
                yearTotal:"Total para o ano:",
                monthTotal:"Total para o mês:", 
                hours:"Horas", 
                scores:"Pontos", 
                distractions:"Distrações", 
                year:"Ano", 
                month:"Mês",
                day:"Dias",
                months: ["Janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
                noUser: "Você precisa ter uma conta para ter estatísticas"
            },
    
            ToDosModal: {
                one:"Todos os ToDos que você criou aparecerão aqui", 
                twoOne:"Retorne o ToDo para a caixa \"Seus ToDos\"", 
                twoTwo:"Exclua o ToDo para sempre", 
                filterBy:"Ordenar por:", 
                lessRecents:"Menos recentes", 
                moreRecents:"Más recentes", 
                lessTime:"Menos Tempo",
                moreTime:"Mais Tempo", 
                all:"Todos", 
                active:"Ativos", 
                completed:"Concluídos", 
                description:"Descrição",
                time:"Tempo",
                creation:"Criação",
                noTodosText:"Você não tem nenhum ToDo registrado"
            },

            AuthenticationModal:{
                logOut:"Fechar Sessão",
                logIn:"Iniciar sessão",
                signUp:"Cadastre-se",
        
                password:"Senha",
                confirmPassword:"Confirmar senha",
                needAccount:"Você precisa de uma conta?",
                alreadyAccount:"Você já tem uma conta?",
        
                noEmailError:"Você tem que inserir o e-mail",
                noPasswordError:"Você tem que inserir a senha",
                putPasswordsError:"Você tem que digitar a senha duas vezes",
                PasswordsNotSimilarError:"As senhas não são semelhantes",
                shortPasswordError:"A senha deve ter mais de 8 caracteres",
        
                failedLogIn:"Falha na autenticação",
                failedSignUp:"O usuário não pôde se registrar",

                failedResetPassword:"Não foi possível redefinir sua senha",
                checkYourEmail: "Verifique seu e-mail",
                yourEmail: "Teu e-mail...",
                yourPassword: "Sua Senha...",
                ForgotPassword: "Você esqueceu sua senha?",
                resetPassword: "Redefina sua senha",
                resetPasswordInfo: "Não se preocupe, enviaremos um e-mail para que você possa redefinir sua senha :)",
                sendEmail: "Enviar e-mail"
            },

            UserModal:{
                sureChangePassword:"Tem certeza que deseja alterar sua senha?",
                sureChangeEmail:"Tem certeza de que deseja alterar seu e-mail para: ",

                passwordBeenUpdated:"A senha foi atualizada :)",
                emailBeenUpdated:"O e-mail foi atualizado :)",

                changePasswordError:"Falha na mudança de senha",
                changeEmailError:"Erro ao alterar e-mail",

                accountDate:" Data de criação da conta",
                bestDay:" Seu melhor dia",
                totalHours:" Total de horas de trabalho em Pomodoit",
                monthLevel:" Seu nível este mês",
                nextLevel:" Próximo nível",

                wantUpdatePassword:"Deseja atualizar sua senha?",
                wantUpdateEmail:"Deseja atualizar seu e-mail?",

                newPassword:"Nova senha",
                newEmail:"Novo Email",

                Update:"Atualizar",
            },

            distractions: "Distrações:",
        },

        pomodoro: {
            noState:"AJUSTAR OS HORÁRIOS PARA INICIAR :)", 

            work:"TRABALHAR",
            rest:"DESCANSO",
            stop:"PAUSA",
            readyFor:"PRONTO PARA",

            assignTimeAlert:"VOCÊ TEM QUE ATRIBUIR OS TEMPOS DO POMODORO",
            restartConfirm:"Tem certeza que deseja reiniciar o Pomodoro?",

            // workTime:"Tempo trabalho", 
            // restTime:"Tempo descanso", 
            workTime:"Trabalho", 
            restTime:"Descanso", 

            startButton:"Começar", 
            stopButton:"Pare", 
            restartButton:"Reiniciar",
            resumeButton:"Prosseguir",
        },

        todos: {
            addTodo:"ADICIONE UM TODO", 
            inputText:"Crie um novo todo...", 
            yourTodos:"SEUS TODOS", 
            todaysHours:"Horas de hoje:", 
            description:"Descrição", 
            today:"Hoje", 
            all:"Total",
            noTodos:"Comece a trabalhar em um ToDo"
        },

        footer:{      
            todayMotivation:"Motivação do dia",      
            noAccount:"Você tem que ter uma conta para poder ter uma frase motivacional diária",
            motivationsPhrases: ['1. “Sempre parece impossível até que seja feito” (Nelson Mandela) ',' 2. "Motivação é o que o faz ir, o hábito é o que o mantém" (Jim Ryun) ',' 3. “Estude o passado se quiser intuir o futuro” (Confúcio) ',' 4. “Se você não gosta do jeito que as coisas são, mude-as” (Jim Rohn) ',' 5. "Não deixe o que você não pode fazer interferir no que você pode fazer" (John R. Wooden) ',' 6. “A boa fortuna favorece os ousados” (Virgílio) ',' 7. "Você sempre pode ser melhor" (Tiger Woods) ',' 8. "Não há substituto para o trabalho árduo" (Thomas Edison) ',' 9. "Eu falhei várias vezes ao longo da minha vida. É por isso que eu tive sucesso" (Michael Jordan) ', '10. “Sem estudar a alma fica doente” (Sêneca) ', '11. "O homem que é um mestre da paciência é um mestre de tudo o mais" (George Saville) ', '12. "Um livro é como um jardim que pode ser carregado no bolso" (provérbio chinês) ', '13. "Se fizéssemos todas as coisas que somos capazes, ficaríamos maravilhados" (Thomas Edison) ', '14. "Quanto mais trabalho, mais sorte pareço ter" (Thomas Jefferson) ', '15. “A qualidade nunca é um acidente, é sempre o resultado de um esforço de inteligência” (John Ruskiin) ', '16. "Mude seus pensamentos e você mudará seu mundo" (Norman Vincent Peale) ', '17. "Seus talentos e habilidades irão melhorar com o tempo, mas para isso você tem que começar" (Martin Luther King) ', '18. "A verdadeira educação consiste em obter o melhor de si mesmo" (Mahatma Gandhi) ', '19. "Nossa paciência realizará mais do que nossa força" (Edmund Burke) ', '20. "Livros são perigosos. Os melhores devem ser rotulados \'Isso pode mudar sua vida\'" (Helen Exley) \', 21. "Sua educação mais importante não está acontecendo em uma sala de aula" (Jim Rohn) ', '22. “A juventude é o momento de estudar a sabedoria; a velhice, de praticá-la” (Jean Jacques Rousseau) ', '23. "Se você não vai até o fim, por que começar?" (Joe Namath) ', '24. "Aprender sem pensar é inútil. Pensar sem aprender, perigoso" (Confúcio)', '25. "Os campeões continuam jogando até acertar" (Billie Jean King) ', '26. "Use todos os seus esforços, mesmo quando as probabilidades estão contra você" (Arnold Palmer) ', '27. "A coisa maravilhosa sobre aprender algo é que ninguém pode tirar isso de nós" (B. B. King) ', '28. “A qualidade não é um ato, mas um hábito” (Aristóteles) ', '29. "Estabeleça metas difíceis e não pare até chegar lá" (Bo Jackson) ', '30. "O homem bem preparado para a luta conseguiu meia vitória" (Miguel de Cervantes) ', '31. "A maneira mais eficaz de fazer isso é fazê-lo" (Amelia Earhat) ', '32. “Tudo é prático” (Pelé) ', '33. “É possível se recuperar de uma derrota, mas custa mais perdoar a si mesmo por não ter tentado” (George Edward Woodberry) ', '34. "Você é mais do que capaz de encontrar o sucesso, mas isso só acontecerá se você se dedicar a ele" (Vince Lombardi) ', '35. "A melhor maneira de prever o futuro é criá-lo" (Peter Drucker) ', '36. "O único lugar onde o sucesso vem antes do trabalho é no dicionário" (Vidal Sassoon) ', '37. “Quem tem medo de perguntar tem vergonha de aprender” (provérbio dinamarquês) ', '38. "A perseverança pode transformar o fracasso em conquistas extraordinárias" (Matt Biondi) ', '39. "Paciência, perseverança e suor fazem uma combinação invencível para alcançar o sucesso" (Napoleon Hill) ', '40. "O sucesso depende do esforço" (Sófocles) ', '41. "Ninguém que deu o melhor de si jamais se arrependeu" (George Halas) ', '42. "Sem autodisciplina, o sucesso é impossível" (Lou Holz) ', '43. "Quem não deu tudo, não deu nada" (Helenio Herrera) ', '45. "Energia e persistência conquistam todas as coisas" (Benjamin Franklin) ', '46. “Qualquer esforço é leve com o hábito” (Tito Livio) ', '47. "Faça de cada dia uma obra-prima" (John Wooden) ', '48. "Seja paciente; todas as coisas são difíceis até se tornarem fáceis" (Saadi) ', '49. "Qual é o sentido de viver se você não faz pelo menos uma coisa notável?" (Anônimo) ', '50. "O segredo para seguir em frente é começar" (Mark Twain)', '51. «Sê paciente com todas as coisas, especialmente contigo» (S. Francisco de Sales) ', '52. "Nunca desista! O fracasso e a rejeição são apenas o primeiro passo para o sucesso" (Jim Valvano)', '53. "Não olhe para o relógio; faça o mesmo que ele, vá em frente" (Sam Levenson) ', '54. "A paciência é amarga, mas seus frutos são doces" (Jean Jacques Rousseau)', '55. "Faça o seu melhor. O que você semear hoje dará frutos amanhã" (Og Mandino)', '56. "Não importa o quão lento você vá, contanto que você não pare" (Confúcio)', '57. "Aceite desafios para sentir a euforia do triunfo" (George S. Patton)', '58. "Vencer não é tudo, mas querer vencer é" (Vince Lombardi)', '59. "O que você pode fazer hoje pode melhorar todos os seus amanhãs" (Ralph Martson)', '60. “Os problemas não são sinais de parada, são diretrizes” (Robert H. Schuller)', '61. "Você pode encontrar derrotas, mas não deve ser derrotado" (Maya Angelou)', '62. "Não é que eu seja muito inteligente, é que fico mais tempo trabalhando nos problemas" (Albert Einstein)', '63. "Perseverança está caindo 19 vezes e subindo 20" (Julie Andrews)'],
            madePhrase1:"Feito com o ",
            madePhrase2:"por"
        }
    }
}