let users = [
    'Baburao Apte',
    'Raju',
    'Shyam',
    'Kachra Sheth',
    'Totla Sheth',
    'Kuk-do-koo',
    'Meri Anuradha',
    'Kabira',
    'Nanji Bhai',
    'Munna Bhai',
    'Pappu',
  ];
  
  ul = document.getElementById("users-list");
  
  let render_lists = function(lists){
    let li = "";
    for(index in lists){
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
  
  render_lists(users);
  
  // Filtering user starts here...
  input = document.getElementById('filter_users');
  
  let filterUsers = function(event){
    keyword = input.value.toLowerCase();
    filtered_users = users.filter(function(user){
          user = user.toLowerCase();
         return user.indexOf(keyword) > -1; 
    });
    
    render_lists(filtered_users);
  }
  
  input.addEventListener('keyup', filterUsers);
  
