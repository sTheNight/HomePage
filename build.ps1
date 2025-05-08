# 此脚本用于测试

$buildFoldPath = "buildfiles"

if (Test-Path -Path $buildFoldPath -PathType Container) {
    try {
        Remove-Item -Path $buildFoldPath -Recurse -Force
    } catch {
        Write-Error "临时构建文件夹删除失败：$_"
    }
}

lessc less/styles.less buildfiles/css/styles.css