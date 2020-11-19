export default 'const wakeUp = () => {\n  if ( tired() ) {\n\tdrinkCoffee();\n  } else {\n\tkeepCoding();\n  }\n});\n\nsetInterval( () => {\n  wakeUp();\n}, 24 * 60 * 60 * 1000); '
