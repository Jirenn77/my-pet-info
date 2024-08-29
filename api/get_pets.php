<?php
// get_pets.php
include 'db.php';

header('Content-Type: application/json');

$filterOwner = $_GET['filterOwner'] ?? '';
$filterSpecies = $_GET['filterSpecies'] ?? '';
$filterBreed = $_GET['filterBreed'] ?? '';

try {
    $query = "SELECT pets.*, owners.owner_name, species.species_name, breeds.breed_name 
              FROM pets 
              JOIN owners ON pets.owner_id = owners.owner_id 
              JOIN species ON pets.species_id = species.species_id 
              JOIN breeds ON pets.breed_id = breeds.breed_id 
              WHERE 1=1";
    
    if ($filterOwner) {
        $query .= " AND owners.owner_name LIKE :filterOwner";
    }
    if ($filterSpecies) {
        $query .= " AND species.species_name LIKE :filterSpecies";
    }
    if ($filterBreed) {
        $query .= " AND breeds.breed_name LIKE :filterBreed";
    }

    $stmt = $pdo->prepare($query);

    if ($filterOwner) {
        $stmt->bindValue(':filterOwner', "%$filterOwner%");
    }
    if ($filterSpecies) {
        $stmt->bindValue(':filterSpecies', "%$filterSpecies%");
    }
    if ($filterBreed) {
        $stmt->bindValue(':filterBreed', "%$filterBreed%");
    }

    $stmt->execute();
    $pets = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($pets);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
