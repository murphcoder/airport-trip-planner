if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: 'airport-trip-planner', domain: 'airport-trip-planner-json-api'
else
    Rails.application.config.session_store :cookie_store, key: 'airport-trip-planner'
end