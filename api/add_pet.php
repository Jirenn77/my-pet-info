<?php

include 'db.php';

header('Content-Type: application/json');

$petName = $_POST['petName'] ?? '';
$ownerId = $_POST['ownerId'] ?? '';
$speciesId = $_POST['speciesId'] ?? '';
$breedId = $_POST['breedId'] ?? '';
$dob = $_POST['dob'] ?? '';

try {
    $stmt = $pdo->prepare("
        INSERT INTO pets (pet_name, owner_id, species_id, breed_id, date_of_birth)
        VALUES (:petName, :ownerId, :speciesId, :breedId, :dob)
    ");
    $stmt->execute([
        ':petName' => $petName,
        ':ownerId' => $ownerId,
        ':speciesId' => $speciesId,
        ':breedId' => $breedId,
        ':dob' => $dob
    ]);

    echo json_encode(['status' => 'success']);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
