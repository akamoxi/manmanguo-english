param([string]$JobsFile,[string]$AudioDirectory,[string]$TemporaryDirectory)
$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Speech
$synth=New-Object System.Speech.Synthesis.SpeechSynthesizer
$englishVoice=$synth.GetInstalledVoices() | Where-Object { $_.Enabled -and $_.VoiceInfo.Culture.Name -eq 'en-US' } | Select-Object -First 1
if(-not $englishVoice){throw 'An installed English synthesis voice is required.'}
$synth.SelectVoice($englishVoice.VoiceInfo.Name)
$synth.Rate=-2
$synth.Volume=100
$format=New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050,[System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen,[System.Speech.AudioFormat.AudioChannel]::Mono)
New-Item -ItemType Directory -Path $TemporaryDirectory -Force | Out-Null
$jobs=Get-Content -LiteralPath $JobsFile -Raw | ConvertFrom-Json
$completed=0
try {
 foreach($job in $jobs){
  $mp3=Join-Path $AudioDirectory ($job.key+'.mp3')
  if(-not (Test-Path -LiteralPath $mp3)){
   $wav=Join-Path $TemporaryDirectory ($job.key+'.wav')
   $synth.SetOutputToWaveFile($wav,$format)
   $synth.Speak($job.text)
   $synth.SetOutputToNull()
   & ffmpeg -hide_banner -loglevel error -nostdin -y -i $wav -c:a libmp3lame -b:a 48k -ar 22050 -ac 1 -map_metadata -1 $mp3
   if($LASTEXITCODE -ne 0){throw ('MP3 encoding failed: '+$job.key)}
   if((Get-Item -LiteralPath $mp3).Length -lt 500){throw ('Empty audio: '+$job.key)}
  }
  $completed++
  if($completed % 200 -eq 0){Write-Output ("Audio: {0}/{1}" -f $completed,$jobs.Count)}
 }
 Write-Output ("Generated {0} English MP3 files using {1}" -f $completed,$englishVoice.VoiceInfo.Name)
}finally{$synth.Dispose()}
