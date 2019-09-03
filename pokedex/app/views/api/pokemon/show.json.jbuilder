json.set! :pokemon do 
  json.extract! @poke, *@poke.attributes.keys
end
json.set! :items do 
  @poke.items.each do |item| 
    json.set! item.id do 
      json.extract! item, *item.attributes.keys
    end
  end
end