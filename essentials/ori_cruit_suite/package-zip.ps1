$src = Join-Path $PSScriptRoot '.'
$dest = Join-Path $PSScriptRoot '..\..\ori_cruit_suite_package.zip'
Write-Host "Packaging $src -> $dest"
if (Test-Path $dest) { Remove-Item $dest -Force }
Compress-Archive -Path "$src\*" -DestinationPath $dest -Force
Write-Host "Package created: $dest"