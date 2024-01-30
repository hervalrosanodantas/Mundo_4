import 'package:flutter/material.dart';

class Info extends StatelessWidget {
  const Info({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Info'),
        backgroundColor: Color.fromARGB(255, 148, 202, 246),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20),
            child: CircleAvatar(
              radius: 70,
              child: Image.asset('images/exploremundo_logo.png'),
            ),
          ),
          const SizedBox(height: 20),
          const ListTile(
            leading: Icon(Icons.person),
            title: Text('Explore Mundo Ltda.'),
            iconColor: Colors.blue,
          ),
          const ListTile(
            leading: Icon(Icons.email),
            title: Text('contato@exploremundo.com.br'),
            iconColor: Colors.blue,
          ),
          const ListTile(
            leading: Icon(Icons.web),
            title: Text('exploremundo.com.br'),
            iconColor: Colors.blue,
          ),
        ],
      ),
    );
  }
}
