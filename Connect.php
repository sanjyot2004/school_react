<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$studentname = $data['studentname'];
$parentname = $data['parentname'];
$class = $data['class'];
$contactnumber = $data['contactnumber'];
$email = $data['email'];

$conn = new mysqli('localhost', 'root', '', 'test');
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection Failed: ' . $conn->connect_error]));
} else {
    
    $stmt = $conn->prepare("INSERT INTO registration (studentname, parentname, class, contactnumber, email) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $studentname, $parentname, $class, $contactnumber, $email);
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Registration Successful']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Registration Failed']);
    }
    $stmt->close();
    $conn->close();
}
?>
