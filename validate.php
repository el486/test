<table class="basic-grey">
<tr><td>
<?php
$nombre=trim($_POST["nombre"]);
$apellido=trim($_POST["apellido"]);
$email=trim($_POST["email"]);
$fecha=trim($_POST["fechanac"]);

if ($nombre=='' || $apellido=='' || $email=='' || $fecha==''){
echo "Deben completarse todos los campos antes de enviarse el formulario";
}else if (strtolower($nombre)=='juan' && strtolower($apellido)=='perez'){
echo "Esta persona NO tiene permitida la carga";
}else{
?>
Apellido:</td><td><?php echo $apellido;?></td></tr>
<tr><td>Nombre:</td><td><?php echo $nombre;?></td></tr>
<tr><td>Email:</td><td><?php echo $email;?></td></tr>
<tr><td>Fecha Nacimiento:</td><td><?php echo $fecha;?>
<?php } ?>
</td></tr>
</table><br>
<a href="javascript:void(0)" onclick="menu('servidor.htm');">Volver al formulario</a><br>
<a href="http://localhost">Inicio</a><br>