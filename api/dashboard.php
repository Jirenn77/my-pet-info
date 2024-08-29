<?php
// dashboard.php
include 'db.php';

header('Content-Type: application/json');

try {
    $response = [];

    // Total Pets
    $stmt = $pdo->query("SELECT COUNT(*) as total FROM pets");
    $response['total_pets'] = $stmt->fetchColumn();

    // Total Species
    $stmt = $pdo->query("SELECT COUNT(DISTINCT species_id) as total FROM pets");
    $response['total_species'] = $stmt->fetchColumn();

    // Total Breeds
    $stmt = $pdo->query("SELECT COUNT(DISTINCT breed_id) as total FROM pets");
    $response['total_breeds'] = $stmt->fetchColumn();

    // Total Owners
    $stmt = $pdo->query("SELECT COUNT(DISTINCT owner_id) as total FROM pets");
    $response['total_owners'] = $stmt->fetchColumn();

    echo json_encode($response);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
