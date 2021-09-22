% x = -10:0.1:10;
#!/opt/octave-4.4.1/bin/octave

[x, y] = fplot (@sin)
waitfor(x, y)
disp('Now that Figure Object has been destroyed I can exit')
