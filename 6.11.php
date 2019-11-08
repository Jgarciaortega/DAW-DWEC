
<html>

    <head>



    </head>

    <body>

    <?php
        
        $cadena1 = "cuando el coche es de el ";
        $cadena2 = "";
        $indice1 = -1;
        $indice2 = -1;
        $inicio = 0;
        $diferencia = 0;
        $arrayIndices = [];

        for($i=0; $i < strlen($cadena1); $i++){

            $indice1 = strpos($cadena1, "el", $i);

            if($indice1 != $indice2){

                $indice2 = $indice1;

                 array_push($arrayIndices, $indice1);

            }
        }

        for($i=0; $i < count($arrayIndices); $i++){

            if($i == count($arrayIndices)-1){

                $diferencia = $arrayIndices[$i+1] - $arrayIndices[$i];
                echo $diferencia;
            }
              
            // $cadena2 .= substr($cadena1, $arrayIndices[i] - $inicio, $diferencia);
            
        }


        echo $cadena2;

    ?>  



    </body>



</html>